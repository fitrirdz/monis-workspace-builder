import { create } from 'zustand';

type Store = {
  desk: string | null;
  chair: string | null;
  accessories: string[];
  setDesk: (id: string) => void;
  setChair: (id: string) => void;
  toggleAccessory: (id: string) => void;
};

export const useWorkspaceStore = create<Store>((set) => ({
  desk: null,
  chair: null,
  accessories: [],
  setDesk: (id) => set({ desk: id }),
  setChair: (id) => set({ chair: id }),
  toggleAccessory: (id) =>
    set((state) => ({
      accessories: state.accessories.includes(id)
        ? state.accessories.filter((a) => a !== id)
        : [...state.accessories, id],
    })),
}));
