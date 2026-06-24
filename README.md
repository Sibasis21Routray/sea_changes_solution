# Frontend README

## SeaChange Solutions - React Frontend

Modern, responsive React frontend for SeaChange Solutions website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── Hero.js
│   ├── Services.js
│   ├── Process.js
│   ├── Testimonials.js
│   ├── Navigation.js
│   └── Footer.js
├── pages/          # Page components
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
├── styles/         # CSS files
├── App.js
└── index.js
```

## Features

- Responsive design (mobile, tablet, desktop)
- Service showcase
- Customer testimonials
- Contact form
- Process visualization
- About page
- Navigation and footer

## Environment Variables

The app assumes the backend API is running on `http://localhost:5000` (set as proxy in package.json).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Styling

Uses vanilla CSS with responsive design principles. All styles are in the `src/styles/` folder.

## API Integration

The frontend communicates with the backend API for:
- Fetching services
- Fetching testimonials
- Submitting contact inquiries
