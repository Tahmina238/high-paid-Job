"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import VideoPlayer from "./SuccessStories";

interface TestimonialCardProps {
  initial: string;
  name: string;
  position: string;
  salary: string;
  testimonial: string;
  videoLabel?: string;
  avatarColor: string;
  videoUrl: string;
}

export default function TestimonialCard({
  initial,
  name,
  position,
  salary,
  testimonial,
  videoLabel,
  avatarColor,
  videoUrl,
}: TestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayClick = (): void => {
    setIsPlaying(true);
  };

  return (
    <Card className="bg-gray-800 border-0 w-[550px] rounded-lg  py-8 mx-auto ">
      <div className="relative">
        {isPlaying ? (
          <VideoPlayer
            videoUrl={videoUrl}
            title={`${name}'s testimonial video`}
            autoPlay={true}
            allowFullScreen={true}
          />
        ) : (
          <div className="aspect-video bg-gray-600 relative">
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="w-4 h-4 rounded-full bg-black/50 flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
            </div>

            {videoLabel && (
              <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded">
                {videoLabel}
              </div>
            )}

            <div className="absolute bottom-3 left-3 flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 rounded-full bg-black/50 text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>

            <div className="absolute bottom-3 right-3">
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 rounded-full bg-black/50 text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="absolute top-3 right-3">
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 rounded-full bg-black/50 text-white"
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-8 h-8 ${avatarColor} rounded-full flex items-center justify-center text-white font-medium`}
          >
            {initial}
          </div>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-gray-400">
              {position} · {salary}
            </p>
          </div>
        </div>

        <p className="text-white text-md mb-2">{testimonial}</p>

        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </Card>
  );
}
