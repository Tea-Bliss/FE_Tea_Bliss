import { create } from 'zustand';

interface UserInfoState {
  caffeine: boolean | null;
  setCaffeine: (caffeine: boolean) => void;
  season: string;
  setSeason: (season: string) => void;
}

const useUserInfoStore = create<UserInfoState>((set) => ({
  caffeine: null,
  setCaffeine: (caffeine) => set({ caffeine: caffeine }),
  season: '',
  setSeason: (season) => set({ season: season }),
}));

export default useUserInfoStore;
