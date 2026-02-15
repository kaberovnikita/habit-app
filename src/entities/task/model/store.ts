import { create } from "zustand";
import type { TaskStore } from "./interface";

export const useTaskStore = create<TaskStore>((set, get) => ({
    items: [],
    currentDay: 1,
    addTask: ((item) => {
        const { currentDay, items } = get()
        set({
            items: [...items, item],
            currentDay: currentDay + 1
        })
    }),
    removeTask: ((id) => {
        const { items } = get()
        set({
            items: items.filter((t) => t.id !== id)
        })
    })
}))