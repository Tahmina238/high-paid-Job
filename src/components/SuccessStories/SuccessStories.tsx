"use client";

import { useState, useRef } from "react";
import type { VideoProps } from "@/types/video";

export default function VideoPlayer({
  videoUrl,
  title,
  width = "100%",
  height = "100%",
  autoPlay = false,
  controls = true,
  allowFullScreen = true,
  muted = false,
  loop = false,
}: //onPlay,
//onPause,
//onEnd,
VideoProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract video ID and platform from URL
  const getEmbedUrl = (url: string): string => {
    // YouTube
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("v=")
        ? url.split("v=")[1].split("&")[0]
        : url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=${
        autoPlay ? 1 : 0
      }&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&loop=${
        loop ? 1 : 0
      }`;
    }

    // Vimeo
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}?autoplay=${
        autoPlay ? 1 : 0
      }&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&loop=${
        loop ? 1 : 0
      }`;
    }

    // Default: return the URL as is if it's already an embed URL
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  const handleIframeLoad = (): void => {
    setIsLoaded(true);
  };

  return (
    <div className="video-container relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="animate-pulse">Loading video...</div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        width={width}
        height={height}
        allowFullScreen={allowFullScreen}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full aspect-video"
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
