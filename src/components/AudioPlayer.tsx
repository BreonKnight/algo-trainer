import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2, RotateCcw, SkipForward } from "lucide-react";
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

// Timer component for algorithm timeboxing
export function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState<number>(0); // Track total time for progress
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (minutes: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeLeft(minutes * 60);
    setTotalTime(minutes * 60);
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
    setTotalTime(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Circular progress bar calculations
  const radius = 28;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = totalTime > 0 ? timeLeft / totalTime : 0;
  const strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <div className="text-xs text-secondary font-medium mb-1">
        Timebox Timer
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <div className="flex flex-col items-center w-full sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <span
              className="mb-4 text-xs text-secondary font-semibold text-center w-full"
              aria-live="polite"
            >
              {isRunning
                ? "Running"
                : timeLeft === 0 && totalTime > 0
                ? "Finished"
                : "Paused"}
            </span>
            <div className="relative flex items-center justify-center w-[56px] h-[56px] mx-auto mb-6">
              {/* Circular Progress Bar */}
              <svg
                height={radius * 2}
                width={radius * 2}
                className="absolute inset-0"
              >
                <circle
                  stroke="#44475a"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <circle
                  stroke="url(#timer-gradient)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  style={{
                    transition:
                      "stroke-dashoffset 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
                <defs>
                  <linearGradient
                    id="timer-gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#ff79c6" />
                    <stop offset="100%" stopColor="#8be9fd" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center font-mono text-xl text-main"
                aria-live="polite"
              >
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => startTimer(15)}
              variant="outline"
              size="sm"
              className="text-xs px-3 h-7 min-w-[44px] bg-secondary text-main hover:bg-secondary/80 rounded-md"
              disabled={isRunning}
              title="Set 15 minute timer"
              aria-label="Set 15 minute timer"
            >
              15m
            </Button>
            <Button
              onClick={() => startTimer(30)}
              variant="outline"
              size="sm"
              className="text-xs px-3 h-7 min-w-[44px] bg-secondary text-main hover:bg-secondary/80 rounded-md"
              disabled={isRunning}
              title="Set 30 minute timer"
              aria-label="Set 30 minute timer"
            >
              30m
            </Button>
            <Button
              onClick={() => startTimer(45)}
              variant="outline"
              size="sm"
              className="text-xs px-3 h-7 min-w-[44px] bg-secondary text-main hover:bg-secondary/80 rounded-md"
              disabled={isRunning}
              title="Set 45 minute timer"
              aria-label="Set 45 minute timer"
            >
              45m
            </Button>
            <Button
              onClick={() => startTimer(60)}
              variant="outline"
              size="sm"
              className="text-xs px-3 h-7 min-w-[44px] bg-secondary text-main hover:bg-secondary/80 rounded-md"
              disabled={isRunning}
              title="Set 1 hour timer"
              aria-label="Set 1 hour timer"
            >
              1h
            </Button>
          </div>
          <div className="h-2" />
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <Button
                onClick={
                  isRunning
                    ? pauseTimer
                    : () => startTimer(Math.ceil(timeLeft / 60))
                }
                variant="default"
                size="sm"
                className="h-7 w-7 min-w-[44px] min-h-[44px] p-0 bg-accent text-main hover:bg-accent2 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md transition-transform"
                title={isRunning ? "Pause timer" : "Start timer"}
                aria-label={isRunning ? "Pause timer" : "Start timer"}
              >
                {isRunning ? <Pause size={14} /> : <Play size={14} />}
              </Button>
              <span className="text-[10px] text-secondary mt-1">
                {isRunning ? "Pause" : "Start"}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Button
                onClick={resetTimer}
                variant="ghost"
                size="sm"
                className="h-7 w-7 min-w-[44px] min-h-[44px] p-0 bg-secondary text-main hover:bg-secondary/80 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md transition-transform"
                title="Reset timer"
                aria-label="Reset timer"
              >
                <RotateCcw size={14} />
              </Button>
              <span className="text-[10px] text-secondary mt-1">Reset</span>
            </div>
          </div>
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

  // Keep track of played songs and shuffle queue
  const [playedSongs, setPlayedSongs] = useState<Set<string>>(new Set());
  const [shuffleQueue, setShuffleQueue] = useState<string[]>([]);

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

  // Function to shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Get next song from shuffle queue or create new queue if empty
  const getNextSong = useCallback(() => {
    if (shuffleQueue.length === 0) {
      console.log("%cRefreshing shuffle queue", "color: #bd93f9");
      // If we've played all songs, reset the played songs
      if (playedSongs.size >= PLAYLIST.length - 1) {
        console.log("%cAll songs played, resetting history", "color: #bd93f9");
        setPlayedSongs(new Set([currentVideoId]));
        const newQueue = shuffleArray(
          PLAYLIST.filter((id) => id !== currentVideoId)
        );
        setShuffleQueue(newQueue);
        return newQueue[0];
      }

      // Create new queue excluding played songs and current song
      const availableSongs = PLAYLIST.filter(
        (id) => !playedSongs.has(id) && id !== currentVideoId
      );
      const newQueue = shuffleArray(availableSongs);
      setShuffleQueue(newQueue);
      return newQueue[0];
    }

    // Return and remove the first song from the queue
    const [nextSong, ...remainingQueue] = shuffleQueue;
    setShuffleQueue(remainingQueue);
    return nextSong;
  }, [shuffleQueue, playedSongs, currentVideoId]);

  const playNextVideo = useCallback(() => {
    // Log current song being skipped
    if (currentVideoId) {
      console.log(
        `%cSkipping current song: ${currentVideoId} - ${getSongName(
          currentVideoId
        )}`,
        "color: #ff79c6"
      );
      // Add current song to played songs
      setPlayedSongs((prev) => new Set([...prev, currentVideoId]));
    }

    const nextVideoId = getNextSong();

    console.log(
      `%cPlaying next song: ${nextVideoId} - ${getSongName(nextVideoId)}`,
      "color: #50fa7b"
    );
    console.log(`%cSongs in queue: ${shuffleQueue.length}`, "color: #6272a4");
    console.log(
      `%cSongs played: ${playedSongs.size}/${PLAYLIST.length}`,
      "color: #6272a4"
    );

    setCurrentVideoId(nextVideoId);
    setCurrentSongName(getSongName(nextVideoId));
    retryCountRef.current = 0;

    attemptPlayback(nextVideoId);
  }, [currentVideoId, getNextSong, shuffleQueue.length]);

  // Initialize with a random video from the playlist
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * PLAYLIST.length);
    const initialSong = PLAYLIST[randomIndex];
    setCurrentVideoId(initialSong);
    setPlayedSongs(new Set([initialSong]));

    // Initialize shuffle queue with remaining songs
    const initialQueue = shuffleArray(
      PLAYLIST.filter((id) => id !== initialSong)
    );
    setShuffleQueue(initialQueue);
  }, []);

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
                console.log(
                  `%cSong ended naturally: ${currentVideoId} - ${getSongName(
                    currentVideoId
                  )}`,
                  "color: #6272a4"
                );
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
                `%cVideo unavailable (Error 150): ${currentVideoId} - ${getSongName(
                  currentVideoId
                )}`,
                "color: #ff5555"
              );
              playNextVideo();
            } else {
              console.warn(
                `%cYouTube player error (Code ${
                  event.data
                }): ${currentVideoId} - ${getSongName(currentVideoId)}`,
                "color: #ff5555"
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
    <div className="flex flex-col items-center gap-1 w-full max-w-[300px] md:max-w-full">
      <div className="text-xs text-secondary font-medium mb-1">
        Background Music
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full gap-y-2">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex flex-col items-center">
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="sm"
              className="h-11 w-11 min-w-[44px] min-h-[44px] p-0 bg-secondary text-main hover:bg-accent2 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md flex-shrink-0 transition-transform"
              title={isPlaying ? "Pause" : "Play"}
              aria-label={
                isPlaying ? "Pause background music" : "Play background music"
              }
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </Button>
            <span className="text-[10px] text-secondary mt-1">
              {isPlaying ? "Pause" : "Play"}
            </span>
            {isPlaying && (
              <span className="mt-1 animate-pulse text-accent2 text-xs">
                ● Playing
              </span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Button
              onClick={playNextVideo}
              variant="ghost"
              size="sm"
              className="h-11 w-11 min-w-[44px] min-h-[44px] p-0 bg-secondary text-main hover:bg-accent2 active:scale-95 focus:ring-2 focus:ring-accent2/50 rounded-md flex-shrink-0 transition-transform"
              title="Skip to next song"
              aria-label="Skip to next song"
            >
              <SkipForward size={18} />
            </Button>
            <span className="text-[10px] text-secondary mt-1">Skip</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <Volume2 size={14} className="text-secondary flex-shrink-0" />
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[60px] lg:w-[80px] h-5 flex-shrink-0"
            value={[volume]}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            aria-label="Volume"
          >
            <Slider.Track className="bg-secondary relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-secondary rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-3 h-3 bg-main rounded-full hover:bg-accent3 focus:outline-none" />
          </Slider.Root>
        </div>
        <div className="block text-xs md:text-sm text-secondary truncate min-w-0 max-w-[120px] lg:max-w-[150px] w-full text-center md:text-left">
          <span
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-accent2/50"
            title={currentSongName}
          >
            {currentSongName || "Loading..."}
          </span>
        </div>
      </div>
      <div id="youtube-player" className="hidden" />
    </div>
  );
}
