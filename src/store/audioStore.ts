import { create } from "zustand";

interface IAudioStore {
  currentTrack: string | null;
  setCurrentTrack: (trackId: string | null) => void;
}

const useAudioStore = create<IAudioStore>((set) => ({
  currentTrack: null,
  setCurrentTrack: (trackId) => set({ currentTrack: trackId }),
}));

export default useAudioStore;
