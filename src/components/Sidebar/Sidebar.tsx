import React from "react";
import { Navigation } from "../Navigation/Navigation";
import style from "./Sidebar.module.scss";

const navItems = {
  top: [
    { label: "Home", href: "/" },
    { label: "Search", href: "/search" },
    { label: "My library", href: "/library" },
  ],
  middle: [
    { label: "New playlist", href: "/playlist" },
    { label: "Liked songs", href: "/liked" },
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
