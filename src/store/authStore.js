import { create } from 'zustand';

const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  setAuth: (tokens) => set({
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
    isAuthenticated: true
  }),
  clearAuth: () => set({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false
  })
}));

export default useAuthStore;