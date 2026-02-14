import { create } from "zustand";
import type { HabitStore } from "./types";


export const useHabitsStore = create<HabitStore>((set) => ({
    items: [],
    modalIsOpen: false,

    addHabit: (habit) =>
        set((state) => ({
            items: [...state.items, habit],
        })),

    removeHabit: (id) =>
        set((state) => ({
            items: state.items.filter((h) => h.id !== id),
        })),

    openModal: () => set({ modalIsOpen: true }),
    closeModal: () => set({ modalIsOpen: false }),
}));