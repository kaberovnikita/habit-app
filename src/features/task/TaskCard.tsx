import { texts } from '../../shared/lib/consts/texts';
import PrimaryButton from '../../shared/ui/PrimaryButton/PrimaryButton';
import styles from './TaskCard.module.css';
import messageIcom from '..//../assets/message.svg'
import { useTaskStore } from '../../entities/task/model/store';
import { useState, type SyntheticEvent } from 'react';
import type { Task } from '../../entities/task/model/interface';
import deleteIcon from '..//../assets/delete.svg'

function TaskCard() {
    const { items, addTask, removeTask } = useTaskStore()
    const [comment, setComment] = useState("")

    const handleAddTaskubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!comment.trim()) {
            return
        }

        const task: Task = {
            id: crypto.randomUUID(),
            comment: comment,
        }

        addTask(task)
        setComment("")
    }

    const deleteTask = (id: string) => {
        removeTask(id)
    }

    return (
        <div className={styles.array_items}>
            {items.map((item, index) => (
                <div key={item.id} className={styles.array_items__task_wrapper}>
                    <div className={styles.task_wrapper__left}>
                        <div className={styles.task_wrapper__text}>{`День ${index + 1}`}</div>
                    </div>
                    <div className={styles.task_wrapper__right}>
                        <div className={styles.task__wrapper__text}>{item.comment}</div>
                        <button onClick={() => deleteTask(item.id)} className={styles.task_wrapper__button}>
                            <img src={deleteIcon} alt='Удалить задачу'></img>
                        </button>
                    </div>
                </div>
            ))}
            {items.length < 10 && (
                <form className={styles.array_items__form} onSubmit={handleAddTaskubmit}>
                    <div className={styles.form__left}>
                        <div className={styles.form__left__text}>{`День ${items.length + 1}`}</div>
                    </div>
                    <div className={styles.form__right}>
                        <div className={styles.form__right_input}>
                            <img className={styles.right_input__icon} src={messageIcom} alt="Комментарий" />
                            <input value={comment} onChange={(event) => setComment(event.target.value)} className={styles.right_input__input} placeholder={texts.comment} />
                        </div>
                        <PrimaryButton type="submit" text={texts.done} />
                    </div>
                </form>
            )}
        </div>
    )
}

export default TaskCard