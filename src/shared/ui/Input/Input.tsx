import type { IInputProps } from "./Input.props";
import styles from "./Input.module.css";

function Input({ placeholder, ...props }: IInputProps) {
    return (
        <div className={styles.wrapper}>
            <input placeholder={placeholder} className={styles.wrapper__input} {...props} />
        </div>
    )
}

export default Input