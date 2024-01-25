import React, { useRef, useState } from "react";
import style from "./Track.module.scss";

interface ITrack {
  title: string;
  src: string;
  preview: string;
  artists: string;
  id: any;
}

const Track: React.FC<ITrack> = ({ title, src, preview, artists, id }) => {
  const [currentSong, setCurrentSong] = useState<ITrack | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current && currentSong && currentSong.id === id) {
      // Текущая песня совпадает с выбранной
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      // Выбрана новая песня
      setCurrentSong({ title, src, preview, artists, id });
      if (audioRef.current) {
        audioRef.current.src = src;
        audioRef.current.play();
      }
    }
  };

  const handleResetCurrentSong = () => {
    setCurrentSong(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Сбросить позицию воспроизведения
    }
  };

  return (
    <div className={style.track}>
      <div className={style.about}>
        <img src={preview} alt="logo" />
        <div className={style.desc}>
          <span className={style.name}>{artists}</span>
          <span className={style.title}>{title}</span>
        </div>
      </div>
      <div className={style.song}>
        <audio ref={audioRef} src={src} onEnded={handleResetCurrentSong} />
      </div>
      <div className={style.control} onClick={handlePlayPause}>
        <img src="/" alt="control" />
      </div>
    </div>
  );
};

export { Track };
