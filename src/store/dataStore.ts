import { dataApi, IData } from "@/services/musicData";
import { create } from "zustand";

interface IDataStore {
  data: IData[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

export const useDataStore = create<IDataStore>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const fetchedData = await dataApi.getPosts();
      set({ data: fetchedData, loading: false });
    } catch (error) {
      set({ error: "Ошибка при загрузке данны", loading: false });
    }
  },
}));
