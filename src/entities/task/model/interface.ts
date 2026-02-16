export interface Task {
    id: string,
    comment: string
}

export interface TaskStore {
    items: Task[]
    addTask: (item: Task) => void
    removeTask: (id: string) => void
}

