"use client";
import React, { useEffect, useState } from "react";
import style from "./Popular.module.scss";
import { useDataStore } from "@/store/dataStore";
import { Track } from "../Track/Track";

const Popular = () => {
  const data = useDataStore((state) => state.data);
  const fetchData = useDataStore((state) => state.fetchData);


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.popular}>
      <h2 className={style.title}>Popular Songs</h2>
      <div className={style.items}>
        {data.map((song) => (
          <Track key={song.id} data={song} />
        ))}
      </div>
    </div>
  );
};

export { Popular };
