import { create } from "zustand";

interface IAudioStore {
  currentTrackId: number | null;
  setCurrentTrackId: (id: number | null) => void;
}

const useAudioStore = create<IAudioStore>((set) => ({
  currentTrackId: null,
  isPLaying: false,
  setCurrentTrackId: (id) => set({ currentTrackId: id }),
}));

export default useAudioStore;
