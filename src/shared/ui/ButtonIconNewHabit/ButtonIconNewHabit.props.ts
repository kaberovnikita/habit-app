import type React from "react";

export interface IButtonIconNewHabit {
    children: (color: string) => React.ReactNode
    isActive: boolean
    onClick: () => void
}