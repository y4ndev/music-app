"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import style from "./Navigation.module.scss";

interface NavCategory {
  label: string;
  href: string;
}

interface NavLinks {
  top: NavCategory[];
  bottom: NavCategory[];
}

interface Props {
  navLinks: NavLinks;
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  const renderMenuItems = (menuItems: NavCategory[]) =>
    menuItems.map((item, index) => (
      <li key={index} className={pathname === item.href ? style.active : ""}>
        <Link href={item.href}>{item.label}</Link>
      </li>
    ));

  return (
    <nav className={style.menu}>
      <ul className={style.listTop}>{renderMenuItems(navLinks.top)}</ul>

      <ul className={style.listBottom}>{renderMenuItems(navLinks.bottom)}</ul>
    </nav>
  );
};

export { Navigation };
