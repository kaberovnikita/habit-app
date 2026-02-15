; import { texts } from '../../../shared/lib/consts/texts';
import PrimaryButton from '../../../shared/ui/PrimaryButton/PrimaryButton';
import styles from './TaskCard.module.css';
import messageIcom from '..//..//../assets/message.svg';

function TaskCard() {
    return (
        <form className={styles.form}>
            <div className={styles.form__left}>
                <div className={styles.form__left__text}>День 1</div>
            </div>
            <div className={styles.form__right}>
                <div className={styles.form__right_input}>
                    <img className={styles.right_input__icon} src={messageIcom} alt="Комментарий" />
                    <input className={styles.right_input__input} placeholder={texts.comment} />
                </div>
                <PrimaryButton type="submit" text={texts.done} />
            </div>
        </form>
    )
}

export default TaskCard