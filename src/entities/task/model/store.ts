import { create } from "zustand";
import type { TaskStore } from "./interface";

export const useTaskStore = create<TaskStore>((set, get) => ({
    items: [],
    index: 0,
    addTask: ((item) => {
        const { items } = get()
        set({
            items: [...items, item]
        })
    }),
    removeTask: ((id) => {
        const { items } = get()
        set({
            items: items.filter((t) => t.id !== id)
        })
    })
}))