import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.10); // 🎚 starts at 10% (hopefully)

  // Playlist
  const playlist = [
    { title: "Vogue", artist: "Fimiguerrero", src: "/music1.mp3" },
    { title: "No Pole", artist: "Don Toliver", src: "/music2.mp3" },
    { title: "WAKE ME UP", artist: "GTVE 4", src: "/music3.mp3" },
    { title: "MVP", artist: "Fimiguerrero", src: "/music4.mp3" },
  ];

  // Apply volume whenever it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.src = playlist[currentTrack].src;
      audioRef.current.load();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;

      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.error("Autoplay prevented:", err));
    }
  };

  const playTrack = (index: number) => {
    if (!audioRef.current) return;

    setCurrentTrack(index);
    audioRef.current.src = playlist[index].src;
    audioRef.current.load();
    audioRef.current.currentTime = 0;
    audioRef.current.volume = volume;

    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch((err) => console.error("Playback failed:", err));
  };

  const nextTrack = () => {
    const newIndex = (currentTrack + 1) % playlist.length;
    playTrack(newIndex);
  };

  const prevTrack = () => {
    const newIndex = (currentTrack - 1 + playlist.length) % playlist.length;
    playTrack(newIndex);
  };

  // Auto-play next when song ends
  useEffect(() => {
    if (!audioRef.current) return;
    const handleEnded = () => nextTrack();
    audioRef.current.addEventListener("ended", handleEnded);
    return () => {
      audioRef.current?.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" />

      {/* Toggle button + tooltip */}
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          onClick={toggleMusic}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 
                     shadow-lg hover:scale-110 hover:bg-white/30 transition-all"
        >
          {playing ? (
            <Volume2 className="w-6 h-6 text-white" />
          ) : (
            <VolumeX className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Tooltip + controls */}
        <AnimatePresence>
          {playing && hovered && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-1/2 translate-x-1/2
                         bg-black/80 text-white text-sm px-4 py-3 rounded-lg
                         flex flex-col gap-2 items-center whitespace-nowrap"
            >
              {/* Song controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTrack}
                  className="hover:text-blue-400 transition"
                >
                  <SkipBack size={18} />
                </button>

                <span>
                  {playlist[currentTrack].title} — {playlist[currentTrack].artist}
                </span>

                <button
                  onClick={nextTrack}
                  className="hover:text-blue-400 transition"
                >
                  <SkipForward size={18} />
                </button>
              </div>

              {/* Volume slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-32 accent-blue-400"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MusicToggle;
