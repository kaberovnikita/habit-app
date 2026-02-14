import type { IPrimaryButtonProps } from "./PrimaryButton.props"
import styles from "./PrimaryButton.module.css";

function PrimaryButton({ text, ...props }: IPrimaryButtonProps) {
    return (
        <button className={styles.button} {...props}>{text}</button>
    )
}

export default PrimaryButton