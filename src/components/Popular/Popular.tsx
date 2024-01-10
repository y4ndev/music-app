import React from "react";
import style from "./Popular.module.scss";

const Popular = () => {
  return (
    <div className={style.popular}>
      <h2 className={style.title}>Popular Songs</h2>
      <div className={style.items}>
        <div className={style.item}>Song 1</div>
        <div className={style.item}>Song 2</div>
        <div className={style.item}>Song 3</div>
        <div className={style.item}>Song 4</div>
        <div className={style.item}>Song 5</div>
        <div className={style.item}>Song 6</div>
      </div>
    </div>
  );
};

export { Popular };
