import { create } from "zustand";
import type { Habit, HabitStore } from "../model/interface";

const habitsRaw = localStorage.getItem("habits")
const habits = habitsRaw ? JSON.parse(habitsRaw) as Habit[] : []


export const useHabitsStore = create<HabitStore>((set, get) => ({
    items: habits,
    modalIsOpen: false,
    addHabit: (item) => {
        const { items } = get()
        const isIconUsed = items.some((habit) => habit.icon === item.icon)
        if (isIconUsed) {
            return false
        }
        const newItems = [...items, item]

        set({
            items: newItems
        })
        localStorage.setItem('habits', JSON.stringify(newItems))
        return true
    },
    addTaskToHabit: (habitID, task) => {
        const { items } = get()
        const newItems = items.map(habit => habit.id === habitID ? { ...habit, tasks: [...habit.tasks, task] } : habit)

        set({
            items: newItems
        })
        localStorage.setItem('habits', JSON.stringify(newItems))
    },
    removeTaskFromHabit: (habitId, taskId) => {
        const { items } = get()
        const newItems = items.map(habit => habit.id === habitId ? { ...habit, tasks: habit.tasks.filter(t => t.id !== taskId) } : habit)

        set({
            items: newItems
        })
        localStorage.setItem('habits', JSON.stringify(newItems))
    },
    openModal: () => set({ modalIsOpen: true }),
    closeModal: () => set({ modalIsOpen: false }),
}));