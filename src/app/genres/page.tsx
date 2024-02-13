import React from "react";
import { Metadata } from "next";
import { useDataStore } from "@/store/dataStore";
import { IData } from "@/services/musicData";

export const metadata: Metadata = {
  title: "Genres",
};

interface IGenres {
  data: IData[];
}

export default async function GenresPage() {
  
  return <div>Page</div>;
}
