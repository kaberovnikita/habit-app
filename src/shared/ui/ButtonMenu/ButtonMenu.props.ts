import type React from "react";

export interface IButtonMenuProps {
    children: (color: string) => React.ReactNode;
    to: string;
}