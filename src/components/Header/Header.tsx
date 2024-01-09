"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Login } from "../Login/Login";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import style from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();

  const homePage = pathname === "/";
  const searchPage = pathname === "/search";
  const libraryPage = pathname === "/library";
  const playlistPage = pathname === "/playlist";
  const likedPage = pathname === "/liked";

  return (
    <header className={style.header}>
      {homePage && <h1>Hello user!</h1>}
      {searchPage && <SearchPanel />}
      <Login />
    </header>
  );
};

export { Header };
