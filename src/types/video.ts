export interface VideoProps {
  videoUrl: string;
  title: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  controls?: boolean;
  allowFullScreen?: boolean;
  muted?: boolean;
  loop?: boolean;
  posterImage?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
}

export interface TestimonialVideoProps {
  videoUrl: string;
  thumbnailUrl?: string;
  videoLabel?: string;
  title: string;
  onPlay?: () => void;
}

export interface VideoPlayerState {
  isPlaying: boolean;
  isLoaded: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
}
