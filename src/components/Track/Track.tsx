import usePlayStore from "@/store/playStore";
import React, { useRef, useState } from "react";
import play from "../../assets/images/play.png";
import pause from "../../assets/images/pause.png";
import style from "./Track.module.scss";

interface ITrack {
  data: {
    title: string;
    src: string;
    preview: string;
    artists: string;
    id: any;
  };
}

const Track: React.FC<ITrack> = ({ data }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { currentTrack, handleToggleAudio, isPlaying } = usePlayStore();

  const isActive = currentTrack?.id === data.id && isPlaying;

  return (
    <div className={style.track}>
      <div className={style.about}>
        <img className={style.logo} src={data.preview} alt="logo" />
        <div className={style.desc}>
          <span className={style.name}>{data.artists}</span>
          <span className={style.title}>{data.title}</span>
        </div>
      </div>
      <div className={style.song}>
        <audio ref={audioRef} src={data.src} />
      </div>
      <div className={style.control} onClick={() => handleToggleAudio(data)}>
        {isActive ? <img src={pause.src} alt="control" /> : <img src={play.src} alt="control" />}
      </div>
    </div>
  );
};

export { Track };
