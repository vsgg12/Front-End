'use client';
import { create } from 'zustand';

interface INaverInfo {
  id: string;
  name: string;
  email: string;
  profile_image: string;
  gender: string;
  mobile: string;
  age: string;
}

type Store = {
  isLogin: boolean;
  userInfo: INaverInfo | null;
  setIsLogin: (loginSuccess: boolean) => void;

  naverInfo: INaverInfo | null;
  setNaverInfo: (naverInfo: INaverInfo | undefined) => void;
};

export const userStore = create<Store>()((set) => ({
  isLogin: false,
  userInfo: null,
  setIsLogin: (loginSuccess: boolean) => set({ isLogin: loginSuccess }),

  naverInfo: null,
  setNaverInfo: (naverInfo: INaverInfo | undefined) =>
    set({ naverInfo: naverInfo }),
}));
