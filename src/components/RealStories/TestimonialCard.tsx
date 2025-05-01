// import type { FC } from "react";

// interface TestimonialCardProps {
//   name: string;
//   position: string;
//   salary: string;
//   testimonial: string;
//   videoId: string;
//   number: number;
//   badge?: {
//     text: string;
//     color: string;
//   };
//   additionalBadge?: {
//     text: string;
//     color: string;
//   };
// }

// export const TestimonialCard: FC<TestimonialCardProps> = ({
//   name,
//   position,
//   salary,
//   testimonial,
//   videoId,
//   number,
//   badge,
//   additionalBadge,
// }) => {
//   // Extract first letter for avatar
//   const initial = name.split(" ")[0][0];

//   return (
//     <div className="bg-[#111827] rounded-lg overflow-hidden">
//       <div className="relative">
//         <div className="aspect-video bg-gray-800 relative">
//           <iframe
//             src={`https://player.vimeo.com/video/${videoId}?h=0c54fe674c`}
//             title={`${name} testimonial video`}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="absolute inset-0 w-full h-full"
//           ></iframe>
//           {badge && (
//             <div
//               className={`absolute bottom-3 left-3 ${badge.color} text-xs font-bold px-2 py-1 rounded z-10`}
//             >
//               {badge.text}
//             </div>
//           )}
//           {additionalBadge && (
//             <div
//               className={`absolute bottom-3 right-3 ${additionalBadge.color} text-xs font-bold px-2 py-1 rounded z-10`}
//             >
//               {additionalBadge.text}
//             </div>
//           )}
//           <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
//             {number}
//           </div>
//         </div>
//       </div>
//       <div className="p-5">
//         <div className="flex items-center mb-3">
//           <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
//             {initial}
//           </div>
//           <div>
//             <h3 className="font-medium text-white">{name}</h3>
//             <p className="text-xs text-gray-400">
//               {position} - {salary}
//             </p>
//           </div>
//         </div>
//         <p className="text-sm mb-3">{testimonial}</p>
//         <div className="flex">
//           {[...Array(5)].map((_, i) => (
//             <svg
//               key={i}
//               className="w-4 h-4 text-yellow-400 fill-current"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//             </svg>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
