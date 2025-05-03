import { useState, useRef, useEffect, useCallback, memo } from "react";
import { Button } from "../ui/button";
import { Play, Pause, Volume2, SkipForward } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import React from "react";

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (volume: number) => void;
  loadVideoById: (videoId: string) => void;
  unMute: () => void;
  destroy: () => void;
}

interface YouTubeEvent {
  target: YouTubePlayer;
  data: number;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          height: string | number;
          width: string | number;
          videoId: string;
          playerVars: {
            autoplay: number;
            controls: number;
            modestbranding: number;
            rel: number;
            showinfo: number;
            enablejsapi?: number;
            origin?: string;
            playsinline?: number;
            fs?: number;
            iv_load_policy?: number;
          };
          events: {
            onReady: (event: YouTubeEvent) => void;
            onStateChange: (event: YouTubeEvent) => void;
            onError: (event: YouTubeEvent) => void;
          };
        }
      ) => YouTubePlayer;
      PlayerState: {
        ENDED: number;
      };
      ready: (callback: () => void) => void;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const PLAYLIST = [
  "gB2qoy9FnVA", // At the Park
  "WLMsWtjo93o", // J Dilla - Two Can Win
  "luKBAq16UZE", // Madlib - Please Set Me At Ease
  "7M1UJmfQ-Kk", // Madlib - Stepping Into Tomorrow
  "mXNxbvJlSc4", // J Dilla - Mash
  "rcbd-r1xC2o", // J Dilla - Last Donut of the Night
  "aTbp_5fSWRM", // J Dilla - Workinonit
  "8OlhqJDlkN4", // J Dilla - Time: The Donut of the Heart
  "3G7GBYbxf8E", // J Dilla - Lightworks
  "Q3GajjH6Ix8", // Madvillain - Raid
  "uWHsvv0oJPM", // Mobb Deep - Give Up The Goods (Just Step) (Instrumental)
  "0gcO25U1GbE", // Madvillain - Rhinestone Cowboy
  "e8YQl9h8L0g", // Madvillain - Fancy Clown
  "uSxlZQUqVPY", // Madvillain - Strange Ways
  "dHcvGqk3Lak", // Madlib - Dillalade Ride
  "SP741TiUI84", // Madlib - Piano Garden
  "RZY9Y5iwIZ8", // Jaylib - Strapped
  "JJ1-UAtn5ho", // J Dilla - Dillatronic #4
  "rZAiviiEuPk", // Nas - Nas Is Like
  "Boa9758vADA", // J Dilla - King
  "uXiwyd4WXLs", // J Dilla - Track 05
  "yAiuBi14_5k", // J Dilla - Dillatronic 36
  "TwqvjtbDZ70", //J Dilla - Signs (Motor City 8)
  "uNenFKeaAow", // Madlib - The Payback (Gotta)
  "WuIdGt0vGnA", //Madlib - Episode XX (second beat extended)
  "1y7C8cSgLMU", // Madlib - The Comeup (Come Down)
  "UrOI3yHKIPU", // Madlib - Two Timer (The Pimp)
  "jznuomjJFyQ", // Jay Dee (aka J.Dilla) Flyyyyyyy
  "tQOjNA6zLRY", // MNDSGN - Travvlin (Feels)
  "5GhqNAy6aUc", //•ŢỤẮMÌÈ• - Ketchup
  "0q6yZeVpwD8", // SNK∆ - Tchalamatcha
  "APOAWb0mgwk", // mndsgn-bananacase
];

const PLAYLIST_COMMENTS: Record<string, string> = {
  gB2qoy9FnVA: "At the Park",
  WLMsWtjo93o: "J Dilla - Two Can Win",
  luKBAq16UZE: "Madlib - Please Set Me At Ease",
  "7M1UJmfQ-Kk": "Madlib - Stepping Into Tomorrow",
  mXNxbvJlSc4: "J Dilla - Mash",
  "rcbd-r1xC2o": "J Dilla - Last Donut of the Night",
  aTbp_5fSWRM: "J Dilla - Workinonit",
  "8OlhqJDlkN4": "J Dilla - Time: The Donut of the Heart",
  "3G7GBYbxf8E": "J Dilla - Lightworks",
  Q3GajjH6Ix8: "Madvillain - Raid",
  uWHsvv0oJPM: "Mobb Deep - Give Up The Goods (Just Step) (Instrumental)",
  "0gcO25U1GbE": "Madvillain - Rhinestone Cowboy",
  e8YQl9h8L0g: "Madvillain - Fancy Clown",
  uSxlZQUqVPY: "Madvillain - Strange Ways",
  dHcvGqk3Lak: "Madlib - Dillalade Ride",
  SP741TiUI84: "Madlib - Piano Garden",
  RZY9Y5iwIZ8: "Jaylib - Strapped",
  "JJ1-UAtn5ho": "J Dilla - Dillatronic #4",
  rZAiviiEuPk: "Nas - Nas Is Like",
  Boa9758vADA: "J Dilla - King",
  uXiwyd4WXLs: "J Dilla - Track 05",
  yAiuBi14_5k: "J Dilla - Dillatronic 36",
  TwqvjtbDZ70: "J Dilla - Signs (Motor City 8)",
  uNenFKeaAow: "Madlib - The Payback (Gotta)",
  WuIdGt0vGnA: "Madlib - Episode XX (second beat extended)",
  "k9Pi7YJ-yq8": "Madlib - The Comeup (Come Down)",
  UrOI3yHKIPU: "Madlib - Two Timer (The Pimp)",
  jznuomjJFyQ: "Jay Dee (aka J.Dilla) Flyyyyyyy",
  tQOjNA6zLRY: "MNDSGN - Travvlin (Feels)",
  "5GhqNAy6aUc": "•ŢỤẮMÌÈ• - Ketchup",
  "0q6yZeVpwD8": "SNK∆ - Tchalamatcha",
  APOAWb0mgwk: "mndsgn-bananacase",
};

// Error boundary component for the AudioPlayer
class AudioPlayerErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("AudioPlayer error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center gap-1 w-full max-w-[300px] md:max-w-full">
          <div className="text-xs text-secondary font-medium mb-1">
            Background Music
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-4 bg-secondary/20 rounded-lg border border-secondary/40">
            <p className="text-sm text-error">
              Audio player encountered an error
            </p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Function to create YouTube embed URL
const createYouTubeEmbedURL = (
  videoId: string,
  shouldAutoplay: boolean = false
) => {
  return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=${
    shouldAutoplay ? 1 : 0
  }&controls=0&modestbranding=1&rel=0&showinfo=0&origin=${
    window.location.origin
  }`;
};

// Add prop type for onPlayStateChange
interface AudioPlayerProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

// Memoized AudioPlayer component
export const AudioPlayer = memo(function AudioPlayer({
  onPlayStateChange,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");
  const [currentSongName, setCurrentSongName] = useState<string>("");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Function to send commands to YouTube iframe
  const sendCommand = useCallback((command: string, value?: number) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const message = {
        event: "command",
        func: command,
        args: value !== undefined ? [value] : [],
      };
      iframeRef.current.contentWindow.postMessage(JSON.stringify(message), "*");
    }
  }, []);

  // Handle volume changes
  const handleVolumeChange = useCallback(
    (newVolume: number[]) => {
      const volumeValue = newVolume[0];
      setVolume(volumeValue);
      sendCommand("setVolume", volumeValue);
    },
    [sendCommand]
  );

  const getSongName = (videoId: string) => {
    // Check if the video ID exists in the PLAYLIST_COMMENTS
    if (videoId in PLAYLIST_COMMENTS) {
      return PLAYLIST_COMMENTS[videoId];
    }

    // Fallback to checking if it's in the playlist
    const song = PLAYLIST.find((id) => id === videoId);
    if (song) {
      return PLAYLIST_COMMENTS[song] || "Unknown Song";
    }

    return "Unknown Song";
  };

  // Initialize with a random video from the playlist
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
    const initialSong = PLAYLIST[randomIndex];
    setCurrentVideoId(initialSong);
    setCurrentSongName(getSongName(initialSong));
    setIsPlaying(false); // Ensure we start paused
  }, []);

  // Set initial volume when iframe loads
  useEffect(() => {
    const iframe = iframeRef.current;
    const handleIframeLoad = () => {
      sendCommand("setVolume", volume);
    };

    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, [sendCommand, volume]);

  // Notify parent when play state changes
  useEffect(() => {
    if (onPlayStateChange) onPlayStateChange(isPlaying);
  }, [isPlaying, onPlayStateChange]);

  const togglePlay = () => {
    console.log("Play button clicked, current state:", isPlaying);
    if (iframeRef.current) {
      try {
        if (isPlaying) {
          // Pause by sending pause command
          sendCommand("pauseVideo");
          setIsPlaying(false);
        } else {
          // Play by sending play command
          sendCommand("playVideo");
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error toggling play state:", error);
        setIsPlaying(false);
      }
    }
  };

  const playNextVideo = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
    const nextVideoId = PLAYLIST[randomIndex];
    if (iframeRef.current) {
      // First set the new video ID and song name
      setCurrentVideoId(nextVideoId);
      setCurrentSongName(getSongName(nextVideoId));

      // Create new URL
      const newUrl = createYouTubeEmbedURL(nextVideoId, true);

      // Add load event listener to the iframe
      const handleLoad = () => {
        if (iframeRef.current) {
          // After iframe loads, update src to trigger autoplay
          iframeRef.current.src = newUrl;
          setIsPlaying(true);
          // Remove the event listener after use
          iframeRef.current.removeEventListener("load", handleLoad);
        }
      };

      iframeRef.current.addEventListener("load", handleLoad);
      iframeRef.current.src = newUrl;
    }
  }, []);

  return (
    <AudioPlayerErrorBoundary>
      <div className="flex flex-col items-center gap-1 w-full min-w-0">
        <div className="text-xs text-secondary font-medium mb-1">
          Background Music
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 px-2 min-w-0">
          {/* Left section - Controls */}
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="flex items-center gap-3">
              <div className="relative flex flex-col items-center">
                <Button
                  onClick={togglePlay}
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 min-w-[40px] min-h-[40px] p-0 bg-secondary text-main hover:bg-accent2 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md flex-shrink-0 transition-transform duration-200 group"
                  title={isPlaying ? "Pause" : "Play"}
                  aria-label={
                    isPlaying
                      ? "Pause background music"
                      : "Play background music"
                  }
                >
                  <span className="transition-transform duration-200 ease-in-out transform group-hover:scale-110">
                    {isPlaying ? (
                      <Pause
                        size={20}
                        className="transition-all duration-200"
                      />
                    ) : (
                      <Play size={20} className="transition-all duration-200" />
                    )}
                  </span>
                </Button>
                {isPlaying && (
                  <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-1 text-accent2 text-[10px] font-normal bg-[rgba(40,42,54,0.95)] px-1.5 py-0.5 rounded-full shadow-md pointer-events-none whitespace-nowrap border border-secondary/20">
                    <span className="text-[12px] leading-none text-accent">
                      •
                    </span>
                    Playing
                  </span>
                )}
              </div>
              <div className="relative">
                <Button
                  onClick={playNextVideo}
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 min-w-[40px] min-h-[40px] p-0 bg-secondary text-main hover:bg-accent2 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md flex-shrink-0 transition-transform duration-200"
                  title="Skip to next song"
                  aria-label="Skip to next song"
                >
                  <SkipForward size={20} />
                </Button>
              </div>
            </div>
            {/* Visualizer removed from here */}
            <div className="flex items-center gap-3 -mt-3">
              <span className="text-[10px] text-secondary text-center w-10">
                {isPlaying ? "Pause" : "Play"}
              </span>
              <span className="text-[10px] text-secondary text-center w-10">
                Skip
              </span>
            </div>
          </div>

          {/* Middle section - Volume and Song Info */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-2 w-full justify-center">
              <Volume2 size={14} className="text-accent flex-shrink-0" />
              <Slider.Root
                className="relative flex items-center select-none touch-none w-[100px] h-5 flex-shrink-0"
                value={[volume]}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                aria-label="Volume"
              >
                <Slider.Track className="bg-secondary/70 relative grow rounded-full h-[4px]">
                  <Slider.Range className="absolute bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-accent rounded-full hover:bg-accent2 focus:outline-none shadow-md ring-2 ring-accent/50 transition-all duration-200 hover:scale-110 active:scale-95" />
              </Slider.Root>
            </div>
            <div className="text-xs text-secondary truncate w-full text-center">
              <span
                tabIndex={0}
                className="focus:outline-none focus:ring-2 focus:ring-accent2/50 px-2 py-1 rounded-md inline-block truncate w-full"
                title={currentSongName}
              >
                {currentSongName || "Loading..."}
              </span>
            </div>
          </div>
        </div>
        <iframe
          ref={iframeRef}
          src={
            currentVideoId ? createYouTubeEmbedURL(currentVideoId, false) : ""
          }
          width="1"
          height="1"
          style={{
            position: "absolute",
            left: -9999,
            top: "auto",
            opacity: 0,
            pointerEvents: "none",
          }}
          title="YouTube music player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </AudioPlayerErrorBoundary>
  );
});
