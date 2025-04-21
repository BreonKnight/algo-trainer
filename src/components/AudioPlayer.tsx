import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (volume: number) => void;
  loadVideoById: (videoId: string) => void;
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
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const PLAYLIST = [
  "y-W-Gbo0uMY", // At the Park
  "qLrnkK82Yfs", // J Dilla - Two Can Win
  "dPmZ1o2xWAA", // Madlib - Shades of Blue
  "JwKnNnqXZtY", // Madlib - Stepping Into Tomorrow
  "QH2-TGUlwu4", // Madlib - Flight to Brazil
  "d8tG1v1pL8E", // J Dilla - Last Donut of the Night
  "1y7C8cSgLMU", // J Dilla - Donuts
  "5u6a1OWnTvY", // J Dilla - Workinonit
  "8OlhqJDlkN4", // J Dilla - Time: The Donut of the Heart
  "lwfGfU3pYF8", // J Dilla - Lightworks
  "rpaonSDPw7Y", // Madvillain - Accordion
  "0onU04uk2EE", // Madvillain - The Illest Villains
  "x8Ru8d0l_fU", // Madvillain - Meat Grinder
  "8j6D_5yYAZc", // Madvillain - Bistro
  "YQHsXMglC9A", // Madvillain - Raid
  "ZQYkWKoMkqM", // Madvillain - America's Most Blunted
  "XQHsXMglC9A", // Madvillain - Sickfit
  "WQHsXMglC9A", // Madvillain - Curls
  "VQHsXMglC9A", // Madvillain - Do Not Fire!
  "UQHsXMglC9A", // Madvillain - Money Folder
  "TQHsXMglC9A", // Madvillain - The Mask
  "SQHsXMglC9A", // Madvillain - Figaro
  "RQHsXMglC9A", // Madvillain - Eye
  "PQHsXMglC9A", // Madvillain - Snitch
  "OQHsXMglC9A", // Madvillain - All Caps
  "NQHsXMglC9A", // Madvillain - Great Day
  "MQHsXMglC9A", // Madvillain - Rhinestone Cowboy
  "LQHsXMglC9A", // Madvillain - Fancy Clown
  "KQHsXMglC9A", // Madvillain - Strange Ways
];

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [timer, setTimer] = useState(0);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");
  const playerRef = useRef<YouTubePlayer | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const playNextVideo = useCallback(() => {
    let nextVideoId;
    do {
      const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
      nextVideoId = PLAYLIST[randomIndex];
    } while (nextVideoId === currentVideoId && PLAYLIST.length > 1);

    setCurrentVideoId(nextVideoId);
    if (playerRef.current) {
      playerRef.current.loadVideoById(nextVideoId);
      playerRef.current.playVideo();
    }
  }, [currentVideoId]);

  // Initialize with a random video from the playlist
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
    setCurrentVideoId(PLAYLIST[randomIndex]);
  }, []);

  // Initialize YouTube Player API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: currentVideoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            try {
              event.target.setVolume(volume);
            } catch (error) {
              console.warn("Failed to set initial volume:", error);
            }
          },
          onStateChange: (event: YouTubeEvent) => {
            try {
              if (event.data === window.YT.PlayerState.ENDED) {
                playNextVideo();
              }
            } catch (error) {
              console.warn("Error handling state change:", error);
            }
          },
          onError: (event: YouTubeEvent) => {
            console.warn("YouTube player error:", event.data);
            playNextVideo(); // Try playing next video on error
          },
        },
      });
    };

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [currentVideoId, volume, playNextVideo]);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }
      } else {
        playerRef.current.playVideo();
        timerIntervalRef.current = setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0];
    setVolume(volumeValue);
    if (playerRef.current) {
      playerRef.current.setVolume(volumeValue);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={togglePlay}
        className="bg-[#bd93f9] hover:bg-[#bd93f9]/90"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </Button>

      <div className="text-[#f8f8f2] font-mono">{formatTime(timer)}</div>

      <div className="flex items-center gap-2">
        <Volume2 size={16} className="text-[#f8f8f2]" />
        <div className="w-24">
          <Slider.Root
            className="relative flex items-center select-none touch-none h-5"
            value={[volume]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
          >
            <Slider.Track className="relative h-1 grow rounded-full bg-[#44475a]">
              <Slider.Range className="absolute h-full rounded-full bg-[#bd93f9]" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-4 h-4 bg-[#f8f8f2] rounded-full shadow-lg hover:bg-[#f8f8f2]/90 focus:outline-none focus:ring-2 focus:ring-[#bd93f9]"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      </div>

      <div id="youtube-player" style={{ display: "none" }}></div>
    </div>
  );
}
