import useAudioStore from "@/store/audioStore";
import usePlayStore from "@/store/playStore";
import React, { useRef } from "react";
import control from "../../assets/images/play.png";
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
  const toggleAudio = usePlayStore((state) => state.handleToggleAudio);

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
      <div className={style.control} onClick={() => toggleAudio(data)}>
        <img src={control.src} alt="control" />
      </div>
    </div>
  );
};

export { Track };
