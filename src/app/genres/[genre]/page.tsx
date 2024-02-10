"use client";
import React from "react";
import { useDataStore } from "@/store/dataStore";
import { Track } from "@/components/Track/Track";

interface IGenre {
  params: {
    genre: string;
  };
}

export default function GenrePage({ params: { genre } }: IGenre) {
  const { data, loading, error } = useDataStore();
  const genreData = data.filter((item) => item.genres === genre);

  return (
    <div>
      <div>
        <h1>{genre}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            {genreData.map((song) => (
              <Track key={song.id} data={song} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
