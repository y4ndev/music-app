import React from "react";
import { Track } from "@/components/Track/Track";
import { IData } from "@/services/musicData";
import { useDataStore } from "@/store/dataStore";
import { GetServerSideProps } from "next";

interface IGenre {
  params: {
    genre: string;
  };
}



async function getData() {
  const { fetchData } = useDataStore.getState();
  return await fetchData();
}

export default async function GenrePage({ params: { genre } }: IGenre) {
  const { fetchData, data, error, loading } = useDataStore.getState();
  await getData();

  const genreData = data.filter((item) => item.genres === genre);

  return (
    <div className="hellomoto">
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
