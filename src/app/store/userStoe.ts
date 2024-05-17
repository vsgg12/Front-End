'use client';
import { create } from 'zustand';

export const userStore = create((set) => {
  isLogin: false;
  userInfo: null;
  setIsLogin: (loginSuccess: boolean) => set({ isLogin: loginSuccess });

  profile: null;
  setProfile: (profile) => set({ profile });
  clearProfile: () => set({ profile: null });
});
