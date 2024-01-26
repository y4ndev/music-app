import React, { useRef } from "react";
import style from "./Track.module.scss";

interface ITrack {
  data: {
    title: string;
    src: string;
    preview: string;
    artists: string;
    id: any;
  };
  isPlaying: boolean;
  onPlayPause: (id: any) => void;
}

const Track: React.FC<ITrack> = ({ data, isPlaying, onPlayPause }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
        onPlayPause(null);
      } else {
        const tracks = document.querySelectorAll("audio");
        tracks.forEach((track) => {
          if (track !== audioRef.current) {
            track.pause();
          }
        });

        audioRef.current.play();
        onPlayPause(data.id);
      }
    }
  };

  return (
    <div className={style.track}>
      <div className={style.about}>
        <img src={data.preview} alt="logo" />
        <div className={style.desc}>
          <span className={style.name}>{data.artists}</span>
          <span className={style.title}>{data.title}</span>
        </div>
      </div>
      <div className={style.song}>
        <audio ref={audioRef} src={data.src} />
      </div>
      <div className={style.control} onClick={handlePlayPause}>
        <img src="/" alt="control" />
      </div>
    </div>
  );
};

export { Track };
