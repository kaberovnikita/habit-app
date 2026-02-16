import type { Task } from "../../task/model/interface";

export interface Habit {
    id: string;
    title: string;
    target: number;
    icon: string;
    tasks: Task[];
};

export interface HabitStore {
    items: Habit[];
    modalIsOpen: boolean;
    addHabit: (item: Habit) => void;
    addTaskToHabit: (habitID: string, task: Task) => void
    removeTaskFromHabit: (habitID: string, taskID: string) => void
    openModal: () => void;
    closeModal: () => void;
};