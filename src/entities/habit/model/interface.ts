export interface Habit {
    id: string;
    title: string;
    target: string;
    icon: string;
};

export interface HabitStore {
    items: Habit[];
    modalIsOpen: boolean;
    addHabit: (item: Habit) => void;
    removeHabit: (id: string) => void;
    openModal: () => void;
    closeModal: () => void;
};