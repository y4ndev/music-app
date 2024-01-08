import React from "react";
import { Login } from "../Login/Login";
import style from "./Header.module.scss";

interface IHeader {
  children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <header className={style.header}>
      {children}
      <Login />
    </header>
  );
};

export { Header };
