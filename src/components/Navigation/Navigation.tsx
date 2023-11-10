import Link from "next/link";
import React from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={style.menu}>
      <ul className={style.listTop}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/library">My library</Link>
        </li>
      </ul>

      <ul className={style.listMiddle}>
        <li>
          <Link href="/playlist">New playlist</Link>
        </li>
        <li>
          <Link href="/liked">Liked songs</Link>
        </li>
      </ul>

      <ul className={style.listBottom}>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/">Log out</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
