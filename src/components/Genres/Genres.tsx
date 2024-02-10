import React from "react";
import Link from "next/link";
import style from "./Genres.module.scss";

const Genres = () => {
  const genresItems = [
    { name: "pop", color: "pink" },
    { name: "chill", color: "red" },
    { name: "house", color: "purple" },
    { name: "bass", color: "orange" },
  ];
  return (
    <div className={style.genres}>
      <h2>Pick up where you left off</h2>
      <div className={style.items}>
        {genresItems.slice(0, 4).map((item) => (
          <Link href={`/genres/${item.name}`}>
            <div className={style.item} style={{ backgroundColor: item.color }}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Genres };
