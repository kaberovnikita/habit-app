import { create } from "zustand";
import type { TaskStore } from "./interface";

export const useTaskStore = create<TaskStore>((set) => ({
    items: [],
    addTask: ((item) => set((state) => {
        return { items: [...state.items, item] }
    })),
    removeTask: ((id) => set((state) => {
        return { items: state.items.filter((t) => t.id !== id) }
    }))
}))