"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function Music() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.volume = 0.3;
            setIsPlaying(true);
        }
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    const handleCurrentTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    }

    return (
        <div style={{ textAlign: "center"}} className="mt-10">
            <h1>Echoes of Memoria</h1>
            <p>LUDICIN</p>
            <Image
                src="/content/music/Echoes%20of%20Memoria.jpg"
                alt="Echoes of Memoria"
                width={420}
                height={420}
                className="mx-auto m-3"
            />
            <audio
                ref = { audioRef } // React.useRef()フックで作成したオブジェクト
                src = "/content/music/Echoes of Memoria.mp3"
                loop

                onPlay = { () => setIsPlaying(true) }
                onPause = { () => setIsPlaying(false) }
                onTimeUpdate = { handleCurrentTimeUpdate }
            />
            <div>
                <button
                    onClick = { isPlaying ? handlePause : handlePlay }
                    style = {{
                        padding: "10px 20px",
                        fontSize: "18px",
                        margin: "10px",
                        cursor: "pointer",
                    }}
                >
                    { isPlaying ? "一時停止" : "再生" }
                </button>
            </div>
            <div>
                <p>現在の再生時間: { currentTime.toFixed(2) } 秒</p>
            </div>
        </div> 
  );
}

/*
    1. 現在の再生時間を取得し続ける仕組み
    2. 特定の再生時間でアクション（アニメーション）をトリガーするロジック
*/