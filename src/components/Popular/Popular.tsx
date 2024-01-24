"use client";
import React, { useEffect, useState, useRef } from "react";
import { dataApi, IData } from "@/services/musicData";
import style from "./Popular.module.scss";

const Popular = () => {
  const [data, setData] = useState<IData[]>([]);
  const [currentSong, setCurrentSong] = useState<IData | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await dataApi.getPosts();
        setData(postsData);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  const handlePlayPause = (song: IData) => {
    if (audioRef.current && currentSong && currentSong.id === song.id) {
      // Текущая песня совпадает с выбранной
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      // Выбрана новая песня
      setCurrentSong(song);
      if (audioRef.current) {
        audioRef.current.src = song.src;
        audioRef.current.play();
      }
    }
  };

  return (
    <div className={style.popular}>
      <h2 className={style.title}>Popular Songs</h2>
      <div className={style.items}>
        {data.map((song) => (
          <div key={song.id} className={style.item} onClick={() => handlePlayPause(song)}>
            {song.title}
          </div>
        ))}
      </div>
      <audio ref={audioRef} onEnded={() => setCurrentSong(null)} />
    </div>
  );
};

export { Popular };
