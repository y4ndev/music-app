import React from "react";
import { Navigation } from "../Navigation/Navigation";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h2 className={style.title}>Music app</h2>
      <Navigation />
    </div>
  );
};

export { Sidebar };
