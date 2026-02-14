import type { IButtonMenuProps } from "./ButtonMenu.props";
import styles from "./ButtonMenu.module.css";
import { useState } from "react";
import { colors } from "../../lib/consts/colors";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

function ButtonMenu({ children, to }: IButtonMenuProps) {
    return (
        <NavLink to={to}>
            {({ isActive }: NavLinkRenderProps) => {
                const [isHover, setHover] = useState(false);
                let color = isActive || isHover ? colors.white : colors.blue;

                return (
                    <button
                        className={`${styles.button} ${isActive ? styles.active : ''}`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {children(color)}
                    </button>
                )
            }}
        </NavLink>
    )
}

export default ButtonMenu