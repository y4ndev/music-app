import React from "react";
import { Navigation } from "../Navigation/Navigation";
import style from "./Sidebar.module.scss";

const navItems = {
  top: [
    { label: "Home", href: "/" },
    { label: "Liked songs", href: "/liked" },
    { label: "Playlist", href: "/playlist" },
  ],
  bottom: [
    { label: "Settings", href: "/settings" },
    { label: "Log in", href: "" },
  ],
};

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <h2 className={style.title}>Music app</h2>
      <Navigation navLinks={navItems} />
    </div>
  );
};

export { Sidebar };
