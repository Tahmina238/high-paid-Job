// import { Button } from "@/components/ui/button";
// import { TestimonialCard } from "./testimonialCard";

// export default function RealStories() {
//   const testimonials = [
//     {
//       name: "Alex P.",
//       position: "Senior UI Designer, TechCo",
//       salary: "$150k",
//       testimonial: "I got two offers within 3 months!",
//       videoId: "1065693603",
//       number: 1,
//       badge: {
//         text: "HIGH RATING",
//         color: "bg-yellow-500 text-black",
//       },
//     },
//     {
//       name: "Maria L.",
//       position: "Senior UX Designer",
//       salary: "$140k",
//       testimonial: "They helped me to get extra $8k!",
//       videoId: "1065693603",
//       number: 2,
//     },
//     {
//       name: "Jamal R.",
//       position: "Senior UI Designer, Uplink",
//       salary: "$115k",
//       testimonial:
//         "The interview prep was incredible, and they even helped me get the permanent offer!",
//       videoId: "1065693603",
//       number: 3,
//       badge: {
//         text: "INTERVIEW PREP",
//         color: "bg-gray-700 text-white",
//       },
//       additionalBadge: {
//         text: "NEGOTIATION SUCCESS",
//         color: "bg-gray-700 text-white",
//       },
//     },
//     {
//       name: "Sarah M.",
//       position: "Senior UI/UX Designer",
//       salary: "$150k",
//       testimonial:
//         "They gave me access to the 500+ active recruiters hungry for talents!",
//       videoId: "1065693603",
//       number: 4,
//     },
//   ];

//   return (
//     <div className="bg-[#0a0c16] min-h-screen text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
//             REAL STORIES
//           </p>
//           <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
//           <p className="text-sm text-gray-300 mb-2">
//             Hear from people who transformed their careers with our program
//           </p>
//           <button className="text-xs text-red-400 flex items-center mx-auto">
//             <span className="mr-1">•</span> VIEW TESTIMONIALS
//           </button>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-2 gap-6 mb-10">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} {...testimonial} />
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center">
//           <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-full px-6 py-2">
//             Book Free Consultation
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
