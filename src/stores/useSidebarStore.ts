import {create} from 'zustand';

type SidebarState = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const useSidebarStore = create<SidebarState>((set) => ({
  isLargeOpen: true,
  isSmallOpen: false,
  toggle: () => set((state) => {
    if (window.innerWidth < 1024) {
      return { isSmallOpen: !state.isSmallOpen };
    } else {
      return { isLargeOpen: !state.isLargeOpen };
    }
  }),
  close: () => set(() => {
    if (window.innerWidth < 1024) {
      return { isSmallOpen: false };
    } else {
      return { isLargeOpen: false };
    }
  }),
}));

export default useSidebarStore;
