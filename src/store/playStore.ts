import { IData } from "@/services/musicData";
import { create } from "zustand";

interface IPlayStore {
  currentTrack: IData | null;
  isPlaying: boolean;
  handleToggleAudio: (track: any) => void;
  audio: HTMLAudioElement;
}

const usePlayStore = create<IPlayStore>((set) => ({
  audio: new Audio(),
  currentTrack: null,
  isPlaying: false,
  handleToggleAudio: (track) =>
    set((state) => {
      const { isPlaying, currentTrack, audio } = state;
      if (currentTrack?.id !== track.id) {
        audio.src = track.src;
        audio.play();
        return { ...state, currentTrack: track, isPlaying: true };
      } else {
        if (isPlaying) {
          audio.pause();
          return { ...state, isPlaying: false };
        } else {
          audio.play();
          return { ...state, isPlaying: true };
        }
      }
    }),
}));

export default usePlayStore;
