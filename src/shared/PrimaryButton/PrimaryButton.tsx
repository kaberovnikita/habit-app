import styles from "./PrimaryButton.module.css";
import type { IPrimaryButtonProps } from "./PrimaryButton.props"

function PrimaryButton({ text }: IPrimaryButtonProps) {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default PrimaryButton