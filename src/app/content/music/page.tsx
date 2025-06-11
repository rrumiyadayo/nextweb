"use client";

import React, { useRef, useState } from "react";

export default function Music() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div style={{ textAlign: "center"}} className="mt-10">
            <h1>Echoes of Memoria</h1>
            <p>LUDICIN</p>
            <audio
                ref = { audioRef } // React.useRef()フックで作成したオブジェクト
                src = "/Echoes%20of%20Memoria.mp3"
                loop

                onEnded = { () => setIsPlaying(false) }
                onPlay = { () => setIsPlaying(true) }
                onPause = { () => setIsPlaying(false) }
            ></audio>
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
        </div> 
  );
}

/*
    1. 現在の再生時間を取得し続ける仕組み
    2. 特定の再生時間でアクション（アニメーション）をトリガーするロジック
*/