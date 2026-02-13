import type { IPrimaryButtonProps } from "./PrimaryButton.props"
import styles from "./PrimaryButton.module.css";

function PrimaryButton({ text, ...props }: IPrimaryButtonProps) {
    return (
        <button {...props} className={styles.button}>{text}</button>
    )
}

export default PrimaryButton