"use client";

import { Button } from "@/components/ui/button";
import TestimonialCard from "./TestimonialCard";

export default function SuccessStoriesSection() {
  return (
    <div className="bg-gray-800 text-white py-8 gap-6 md:px-8 lg:px-16">
      <div className="">
        <div className="text-center mb-10">
          <p className="text-md font-semibold text-[#4a9bff] tracking-wider">
            REAL STORIES
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-3">Success Stories</h2>
          <p className="text-lg text-gray-300 mb-4">
            Hear from people who transformed their careers with our program
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border border-red-500 text-red-500 text-xs rounded-full px-4"
            >
              🔴 LIVE TESTIMONIAL
            </Button>
          </div>
        </div>

        <div className=" text-white text-md grid grid-cols-1 py-8 max-w-7xl mx-auto bg-gray-800 md:grid-cols-2 ">
          {/* Testimonial 1 */}
          <TestimonialCard
            initial="A"
            name="Alex P."
            position="Hired @ Fortune 100"
            salary="$109K"
            testimonial="I got two offers within 3 months!"
            videoLabel="HIGH-PAYING"
            avatarColor="bg-green-500"
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          />

          {/* Testimonial 2 */}
          <TestimonialCard
            initial="M"
            name="Maria S."
            position="Hired @ FAANG"
            salary="$135K"
            testimonial="They helped me to get extra $8k!"
            avatarColor="bg-cyan-500"
            videoUrl="https://www.youtube.com/embed/jNQXAC9IVRw"
          />

          {/* Testimonial 3 */}
          <TestimonialCard
            initial="J"
            name="Jamal R."
            position="Hired @ Product Co."
            salary="$115K"
            testimonial="The interview prep was incredible, and they even helped me get the permanent offer!"
            videoLabel="NEGOTIATION WITH EXPERT GUIDANCE"
            avatarColor="bg-blue-500"
            videoUrl="https://player.vimeo.com/video/76979871"
          />

          {/* Testimonial 4 */}
          <TestimonialCard
            initial="S"
            name="Sarah M."
            position="Hired @ Tech Startup"
            salary="$132K"
            testimonial="They gave me access to the 500+ active recruiters hungry for talents!"
            avatarColor="bg-teal-500"
            videoUrl="https://www.youtube.com/embed/C0DPdy98e4c"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Button className="bg-yellow-400 text-gray-950 font-medium rounded-full px-8 py-2">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
