"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import FloatingCircle from "@/app/content/music/FloatingCircles";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentAnimationVariant, setCurrentAnimationVariant] = useState<string>("static");
  const [showCircle, setShowCircle] = useState<boolean>(false);
  const imageAnimationVariants = {
    one_eighth: {
      scale: [1, 1.01, 1, 1.01],
      opacity: [1, 0.8, 1, 0.8],
      transition: {
        duration: 0.125,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay: 0.3,
      },
    },
    static: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
      setIsPlaying(true);
    }
  };
  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };
  const handleCurrentTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      setCurrentTime(current);

      if (current >= 0 && current < 2.3 && isPlaying) {
        if (currentAnimationVariant !== "one_eighth") {
          setCurrentAnimationVariant("one_eighth");
        }
      } else {
        if (currentAnimationVariant !== "static") {
          setCurrentAnimationVariant("static");
        }
      }
      if (current >= 2.1 && current < 3.9 && isPlaying) {
        if (currentAnimationVariant !== "static") {
          setCurrentAnimationVariant("static");
        }
        setShowCircle(true);
      } else {
        setShowCircle(false);
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }} className="mt-10">
      <AnimatePresence>{showCircle && <FloatingCircle />}</AnimatePresence>
      <h1>Echoes of Memoria</h1>
      <p>LUDICIN</p>
      <motion.div
        variants={imageAnimationVariants}
        animate={currentAnimationVariant}
        className="mx-auto m-3"
      >
        <Image
          src="/content/music/Echoes%20of%20Memoria.jpg"
          alt="Echoes of Memoria"
          width={420}
          height={420}
          className="mx-auto m-3"
        />
      </motion.div>

      <audio
        ref={audioRef}
        src="/content/music/Echoes%20of%20Memoria.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleCurrentTimeUpdate}
      />
      <div>
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          {isPlaying ? "一時停止" : "再生"}
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          リセット
        </button>
      </div>
      <div>
        <p>現在の再生時間: {currentTime.toFixed(2)} 秒</p>
      </div>
    </div>
  );
}
