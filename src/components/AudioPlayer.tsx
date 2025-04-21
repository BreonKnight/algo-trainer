import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2, RotateCcw } from "lucide-react";
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
            modestbranding: number;
            rel: number;
            showinfo: number;
            enablejsapi?: number;
            origin?: string;
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
  "gB2qoy9FnVA", // At the Park
  "WLMsWtjo93o", // J Dilla - Two Can Win
  "luKBAq16UZE", // Madlib - Please Set Me At Ease
  "7M1UJmfQ-Kk", // Madlib - Stepping Into Tomorrow
  "QH2-TGUlwu4", // Madlib - Flight to Brazil
  "rcbd-r1xC2o", // J Dilla - Last Donut of the Night
  "1y7C8cSgLMU", // J Dilla - Donuts
  "aTbp_5fSWRM", // J Dilla - Workinonit
  "8OlhqJDlkN4", // J Dilla - Time: The Donut of the Heart
  "3G7GBYbxf8E", // J Dilla - Lightworks
  "2_5edxArGT8", // Madvillain - Raid
  "uWHsvv0oJPM", // Mobb Deep - Give Up The Goods (Just Step) (Instrumental)
  "0gcO25U1GbE", // Madvillain - Rhinestone Cowboy
  "e8YQl9h8L0g", // Madvillain - Fancy Clown
  "uSxlZQUqVPY", // Madvillain - Strange Ways
];

const PLAYLIST_COMMENTS: Record<string, string> = {
  gB2qoy9FnVA: "At the Park",
  WLMsWtjo93o: "J Dilla - Two Can Win",
  luKBAq16UZE: "Madlib - Please Set Me At Ease",
  "7M1UJmfQ-Kk": "Madlib - Stepping Into Tomorrow",
  "QH2-TGUlwu4": "Madlib - Flight to Brazil",
  "rcbd-r1xC2o": "J Dilla - Last Donut of the Night",
  "1y7C8cSgLMU": "J Dilla - Donuts",
  aTbp_5fSWRM: "J Dilla - Workinonit",
  "8OlhqJDlkN4": "J Dilla - Time: The Donut of the Heart",
  "3G7GBYbxf8E": "J Dilla - Lightworks",
  "2_5edxArGT8": "Madvillain - Raid",
  uWHsvv0oJPM: "Mobb Deep - Give Up The Goods (Just Step) (Instrumental)",
  "0gcO25U1GbE": "Madvillain - Rhinestone Cowboy",
  e8YQl9h8L0g: "Madvillain - Fancy Clown",
  uSxlZQUqVPY: "Madvillain - Strange Ways",
};

// Timer component for algorithm timeboxing
export function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (minutes: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeLeft(minutes * 60);
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimeLeft(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="text-xs text-[#6272a4] font-medium mb-1">
        Timebox Timer
      </div>
      <div className="flex items-center gap-4">
        <div className="font-mono text-xl text-[#f8f8f2] min-w-[80px]">
          {formatTime(timeLeft)}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => startTimer(15)}
            variant="ghost"
            size="sm"
            className="text-xs px-3 h-7 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            disabled={isRunning}
            title="Set 15 minute timer"
          >
            15m
          </Button>
          <Button
            onClick={() => startTimer(30)}
            variant="ghost"
            size="sm"
            className="text-xs px-3 h-7 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            disabled={isRunning}
            title="Set 30 minute timer"
          >
            30m
          </Button>
          <Button
            onClick={() => startTimer(45)}
            variant="ghost"
            size="sm"
            className="text-xs px-3 h-7 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            disabled={isRunning}
            title="Set 45 minute timer"
          >
            45m
          </Button>
          <Button
            onClick={() => startTimer(60)}
            variant="ghost"
            size="sm"
            className="text-xs px-3 h-7 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            disabled={isRunning}
            title="Set 1 hour timer"
          >
            1h
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={
              isRunning
                ? pauseTimer
                : () => startTimer(Math.ceil(timeLeft / 60))
            }
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            title={isRunning ? "Pause timer" : "Start timer"}
          >
            {isRunning ? <Pause size={14} /> : <Play size={14} />}
          </Button>
          <Button
            onClick={resetTimer}
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            title="Reset timer"
          >
            <RotateCcw size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");
  const [currentSongName, setCurrentSongName] = useState<string>("");
  const playerRef = useRef<YouTubePlayer | null>(null);
  const retryCountRef = useRef(0);
  const maxRetries = 3;

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

  const attemptPlayback = useCallback((videoId: string) => {
    if (playerRef.current) {
      try {
        console.log(
          `Attempting to play video: ${videoId} - ${getSongName(videoId)}`
        );
        playerRef.current.loadVideoById(videoId);
        playerRef.current.playVideo();
      } catch (error) {
        console.warn(`Failed to play video ${videoId}:`, error);
        if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          console.log(`Retry attempt ${retryCountRef.current} for ${videoId}`);
          setTimeout(() => attemptPlayback(videoId), 1000);
        } else {
          console.log(`Max retries reached for ${videoId}, trying next video`);
          const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
          const nextVideoId = PLAYLIST[randomIndex];
          retryCountRef.current = 0;
          setCurrentVideoId(nextVideoId);
          setCurrentSongName(getSongName(nextVideoId));
          attemptPlayback(nextVideoId);
        }
      }
    }
  }, []);

  const playNextVideo = useCallback(() => {
    // Create a shuffled copy of the playlist to ensure better randomization
    const shuffledPlaylist = [...PLAYLIST].sort(() => Math.random() - 0.5);

    // Find the next video that's different from the current one
    const nextVideoId =
      shuffledPlaylist.find((id) => id !== currentVideoId) ||
      shuffledPlaylist[0];

    console.log(
      `Playing next video: ${nextVideoId} - ${getSongName(nextVideoId)}`
    );

    setCurrentVideoId(nextVideoId);
    setCurrentSongName(getSongName(nextVideoId));
    retryCountRef.current = 0;

    // Reset timer when changing songs
    attemptPlayback(nextVideoId);
  }, [currentVideoId, attemptPlayback]);

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
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            try {
              event.target.setVolume(volume);
              // If we're already supposed to be playing, start playback
              if (isPlaying) {
                event.target.playVideo();
              }
            } catch (error) {
              console.warn("Failed to set initial volume:", error);
            }
          },
          onStateChange: (event: YouTubeEvent) => {
            try {
              if (event.data === window.YT.PlayerState.ENDED) {
                console.log("Video ended, playing next video");
                playNextVideo();
              }
            } catch (error) {
              console.warn("Error handling state change:", error);
            }
          },
          onError: (event: YouTubeEvent) => {
            // Error code 150 means the video is unavailable
            if (event.data === 150) {
              console.warn(
                `Video ${currentVideoId} is unavailable, trying next video`
              );
              playNextVideo();
            } else {
              console.warn(
                `YouTube player error for video ${currentVideoId}:`,
                event.data
              );
              // For other errors, try to reload the current video
              if (retryCountRef.current < maxRetries) {
                retryCountRef.current++;
                setTimeout(() => attemptPlayback(currentVideoId), 1000);
              } else {
                playNextVideo();
              }
            }
          },
        },
      });
    };

    return () => {
      if (retryCountRef.current) {
        retryCountRef.current = 0;
      }
    };
  }, [currentVideoId, volume, playNextVideo, isPlaying, attemptPlayback]);

  const togglePlay = () => {
    if (playerRef.current) {
      try {
        if (isPlaying) {
          playerRef.current.pauseVideo();
        } else {
          // If we don't have a current video, select one
          if (!currentVideoId) {
            const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
            const nextVideoId = PLAYLIST[randomIndex];
            setCurrentVideoId(nextVideoId);
            setCurrentSongName(getSongName(nextVideoId));
            attemptPlayback(nextVideoId);
          } else {
            playerRef.current.playVideo();
          }
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.warn("Playback failed, retrying...", error);
        if (currentVideoId) {
          attemptPlayback(currentVideoId);
        } else {
          // If we don't have a current video, select one
          const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
          const nextVideoId = PLAYLIST[randomIndex];
          setCurrentVideoId(nextVideoId);
          setCurrentSongName(getSongName(nextVideoId));
          attemptPlayback(nextVideoId);
        }
      }
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0];
    setVolume(volumeValue);
    if (playerRef.current) {
      playerRef.current.setVolume(volumeValue);
    }
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="text-xs text-[#6272a4] font-medium mb-1">
        Background Music
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={togglePlay}
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 bg-[#44475a] text-[#f8f8f2] hover:bg-[#44475a]/80 rounded-md"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </Button>
          <div className="hidden sm:flex items-center gap-2">
            <Volume2 size={14} className="text-[#6272a4]" />
            <Slider.Root
              className="relative flex items-center select-none touch-none w-[100px] h-5"
              value={[volume]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              aria-label="Volume"
            >
              <Slider.Track className="bg-[#44475a] relative grow rounded-full h-[3px]">
                <Slider.Range className="absolute bg-[#6272a4] rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-3 h-3 bg-[#f8f8f2] rounded-full hover:bg-[#bd93f9] focus:outline-none" />
            </Slider.Root>
          </div>
        </div>
        <div className="hidden sm:block text-sm text-[#6272a4] truncate max-w-[200px]">
          {currentSongName || "Loading..."}
        </div>
      </div>
      <div id="youtube-player" className="hidden" />
    </div>
  );
}
