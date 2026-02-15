export interface Task {
    id: string,
    day: number,
    comment: string
}

export interface TaskStore {
    items: Task[]
    currentDay: number,
    addTask: (item: Task) => void
    removeTask: (id: string) => void
}

