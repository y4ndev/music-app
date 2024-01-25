import React from "react";
import style from "./Genres.module.scss";

const Genres = () => {
  return (
    <div className={style.genres}>
      <h2>Pick up where you left of</h2>
      <div className={style.items}>
        <div className={style.item} />
        <div className={style.item} />
        <div className={style.item} />
        <div className={style.item} />
      </div>
    </div>
  );
};

export { Genres };
