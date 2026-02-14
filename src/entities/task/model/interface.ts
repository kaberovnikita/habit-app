export interface Task {
    id: number,
    index: number,
    comment: string
}

export interface TaskStore {
    items: Task[]
    addTask: (item: Task) => void
    removeTask: (id: number) => void
}

