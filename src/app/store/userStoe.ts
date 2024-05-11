'use client';
import { create } from 'zustand';

export const useStore = create((set) => {
  isLogin: false;
  userInfo: null;
  setIsLogin: (loginSuccess: boolean) => set({ isLogin: loginSuccess });
});
