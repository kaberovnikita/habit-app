import type { IButtonMenuProps } from "./ButtonMenu.props";
import styles from "./ButtonMenu.module.css";
import { useState } from "react";
import { colors } from "../../lib/consts/colors";

function ButtonMenu({ children }: IButtonMenuProps) {
    const [isActive, setActive] = useState<boolean>(false)
    const [isHover, setHover] = useState<boolean>(false)

    let color = colors.blue
    switch (true) {
        case isActive:
            color = colors.white
            break
        case isHover:
            color = colors.white
            break
    }

    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={() => setActive(prev => !prev)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children(color)}
        </button>
    )
}

export default ButtonMenu