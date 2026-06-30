const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, turnstileToken } = req.body;

  // Validate required fields
  if (!name || !email || !message || !turnstileToken) {
    return res.status(400).json({ 
      error: 'Missing required fields or CAPTCHA token',
      fields: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        message: !message ? 'Message is required' : null,
        turnstileToken: !turnstileToken ? 'CAPTCHA verification is required' : null,
      }
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // 1. Verify Cloudflare Turnstile Token
    const params = new URLSearchParams();
    params.append('secret', process.env.TURNSTILE_SECRET_KEY);
    params.append('response', turnstileToken);

    // Add remote IP for better security (optional)
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (clientIP) {
      params.append('remoteip', clientIP);
    }

    const verifyResponse = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 10000, // 10 second timeout
      }
    );

    if (!verifyResponse.data.success) {
      console.error('Turnstile verification failed:', verifyResponse.data);
      return res.status(400).json({ 
        error: 'CAPTCHA verification failed. Please try again.',
        details: verifyResponse.data['error-codes'] || ['Unknown error']
      });
    }

    // 2. Format the message with proper styling
    const formattedMessage = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .header { background: #0B0F1A; padding: 20px; border-radius: 8px 8px 0 0; }
          .header h2 { color: #8FB5CC; margin: 0; }
          .content { padding: 20px; background: #f9f9f9; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #0B0F1A; display: block; margin-bottom: 5px; }
          .field-value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0; }
          .service-tag { display: inline-block; background: #8FB5CC20; color: #0B0F1A; padding: 4px 12px; border-radius: 12px; font-size: 13px; margin: 3px 4px 3px 0; border: 1px solid #8FB5CC40; }
          .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>📬 New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="field-label">👤 Name</span>
            <div class="field-value">${escapeHtml(name)}</div>
          </div>
          
          <div class="field">
            <span class="field-label">📧 Email</span>
            <div class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
          </div>
          
          ${subject ? `
          <div class="field">
            <span class="field-label">📋 Subject</span>
            <div class="field-value">${escapeHtml(subject)}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="field-label">💬 Message</span>
            <div class="field-value" style="white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
          
          <div class="field" style="margin-top: 20px;">
            <span class="field-label">📅 Timestamp</span>
            <div class="field-value">${new Date().toLocaleString('en-US', { 
              timeZone: 'UTC',
              dateStyle: 'full',
              timeStyle: 'medium'
            })} UTC</div>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent from your portfolio contact form.</p>
          <p style="margin-top: 5px; color: #999;">IP: ${clientIP || 'Not available'}</p>
        </div>
      </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const plainTextMessage = `
New Contact Form Submission
${'='.repeat(40)}

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ''}
Message:
${message}

---
Timestamp: ${new Date().toISOString()}
IP: ${clientIP || 'Not available'}
`;

    // 3. Send email via Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.BREVO_SMTP_LOGIN,
        pass: process.env.BREVO_SMTP_KEY,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.BREVO_SENDER_EMAIL}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      text: plainTextMessage,
      html: formattedMessage,
      // Add custom headers for better deliverability
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'X-Mailer': 'Portfolio Contact Form',
      },
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // 4. Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      messageId: info.messageId,
    });

  } catch (error) {
    console.error('Error handling contact form:', {
      message: error.message,
      response: error.response?.data,
      stack: error.stack,
    });

    // Handle specific error cases
    if (error.code === 'ECONNREFUSED') {
      return res.status(503).json({ 
        error: 'Email service is temporarily unavailable. Please try again later.' 
      });
    }

    if (error.response?.status === 429) {
      return res.status(429).json({ 
        error: 'Too many requests. Please wait a moment before trying again.' 
      });
    }

    res.status(500).json({ 
      error: 'Failed to send message. Please try again later or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Helper function to escape HTML
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'An unexpected error occurred. Please try again later.' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
});