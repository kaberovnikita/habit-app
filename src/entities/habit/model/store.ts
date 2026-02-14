import { create } from "zustand";
import type { HabitStore } from "./interface";

export const useHabitsStore = create<HabitStore>((set) => ({
    items: [],
    modalIsOpen: false,
    addHabit: (item) => set((state) => {
        return { items: [...state.items, item] }
    }),
    removeHabit: (id) => set((state) => {
        return { items: state.items.filter((h) => h.id !== id) }
    }),
    openModal: () => set({ modalIsOpen: true }),
    closeModal: () => set({ modalIsOpen: false }),
}));