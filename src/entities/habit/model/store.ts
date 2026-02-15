import { create } from "zustand";
import type { HabitStore } from "./interface";

export const useHabitsStore = create<HabitStore>((set, get) => ({
    items: [],
    modalIsOpen: false,
    addHabit: (item) => {
        const { items } = get()
        set({
            items: [...items, item]
        })
    },
    removeHabit: (id) => {
        const { items } = get()
        set({
            items: items.filter((h) => h.id !== id)
        })
    },
    openModal: () => set({ modalIsOpen: true }),
    closeModal: () => set({ modalIsOpen: false }),
}));