import { useState } from "react";
import { colors } from "../../lib/consts/colors"
import type { IButtonIconNewHabit } from "./ButtonIconNewHabit.props"
import styles from './ButtonIconNewHabit.module.css';

function ButtonIconNewHabit({ children, isActive, onClick }: IButtonIconNewHabit) {
    const [isHover, setHover] = useState(false)
    let color = isActive || isHover ? colors.white : colors.blue;

    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children(color)}
        </button>
    )
}

export default ButtonIconNewHabit