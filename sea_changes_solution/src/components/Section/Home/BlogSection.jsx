// import { Link } from "react-router-dom";

// const posts = [
//   {
//     category: "Compliance",
//     categoryColor: "bg-blue-100 text-[#0B5EAB]",
//     date: "March 14, 2025",
//     title: "5 Compliance Mistakes That Could Cost Your Business in 2025",
//     author: "SEACHANGE Team",
//     excerpt:
//       "Regulatory requirements are evolving fast. Here are the most common pitfalls businesses fall into — and how to avoid them before they become expensive problems.",
//     slug: "compliance-mistakes-2025",
//   },
//   {
//     category: "Digital Marketing",
//     categoryColor: "bg-purple-100 text-purple-700",
//     date: "February 28, 2025",
//     title: "Why SEO Alone Isn't Enough: A Multi-Channel Growth Strategy",
//     author: "Marketing Team",
//     excerpt:
//       "Search rankings matter, but the businesses winning in 2025 are those combining SEO with paid media, content, and social — an integrated playbook for sustainable growth.",
//     slug: "multi-channel-growth-strategy",
//   },
//   {
//     category: "Tech Solutions",
//     categoryColor: "bg-emerald-100 text-emerald-700",
//     date: "February 10, 2025",
//     title: "How Custom Software Gives SMEs an Unfair Competitive Advantage",
//     author: "Tech Team",
//     excerpt:
//       "Off-the-shelf tools have limits. Discover how small and mid-sized businesses are using custom tech to move faster, reduce costs, and outmaneuver the competition.",
//     slug: "custom-software-advantage",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
//           <div>
//             <span className="text-[#0B5EAB] text-xs font-semibold uppercase tracking-widest mb-3 block">
//               Latest News
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-black text-[#0B1F3A] leading-tight">
//               Insights & Stories
//             </h2>
//           </div>
//           <Link
//             to="/blog"
//             className="flex-shrink-0 flex items-center gap-2 text-[#0B5EAB] font-semibold text-sm hover:gap-3 transition-all duration-200"
//           >
//             View All Articles
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </Link>
//         </div>

//         {/* Posts Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
//           {posts.map((post) => (
//             <article
//               key={post.slug}
//               className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
//             >
//               {/* Placeholder image */}
//               <div className="h-48 bg-gradient-to-br from-[#EEF4FB] to-[#D6E8F8] relative overflow-hidden flex-shrink-0">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-[#0B5EAB]/20 rounded-2xl flex items-center justify-center">
//                     <svg className="w-8 h-8 text-[#0B5EAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 flex flex-col flex-1">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
//                     {post.category}
//                   </span>
//                   <span className="text-xs text-[#8FAFC9]">{post.date}</span>
//                 </div>

//                 <h3 className="text-[#0B1F3A] font-bold text-base leading-snug mb-3 group-hover:text-[#0B5EAB] transition-colors">
//                   {post.title}
//                 </h3>

//                 <p className="text-[#4A6280] text-sm leading-relaxed mb-5 flex-1">
//                   {post.excerpt}
//                 </p>

//                 <div className="flex items-center justify-between">
//                   <span className="text-xs text-[#8FAFC9]">By {post.author}</span>
//                   <Link
//                     to={`/blog/${post.slug}`}
//                     className="text-[#0B5EAB] font-semibold text-xs flex items-center gap-1 hover:gap-2 transition-all duration-200"
//                   >
//                     Read More
//                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
