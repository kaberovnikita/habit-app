import { texts } from '../../shared/lib/consts/texts';
import PrimaryButton from '../../shared/ui/PrimaryButton/PrimaryButton';
import styles from './TaskCard.module.css';
import messageIcom from '..//../assets/message.svg'
import { useState, type SyntheticEvent } from 'react';
import type { Task } from '../../entities/task/model/interface';
import deleteIcon from '..//../assets/delete.svg'
import type { ITaskCardProps } from './TaskCard.props';
import { useHabitsStore } from '../../entities/habit/store/store';

function TaskCard({ habitID }: ITaskCardProps) {
    const [comment, setComment] = useState("")
    const { items } = useHabitsStore()
    const habit = items.find((h) => h.id === habitID)
    if (!habit) {
        return
    }

    const { addTaskToHabit, removeTaskFromHabit } = useHabitsStore()
    const handleAddTaskubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!comment.trim()) {
            return
        }

        const task: Task = {
            id: crypto.randomUUID(),
            comment: comment,
        }

        addTaskToHabit(habitID, task)
        setComment("")
    }

    const deleteTask = (id: string) => {
        removeTaskFromHabit(habitID, id)
    }

    return (
        <div className={styles.array_items}>
            {habit.tasks.map((task, index) => (
                <div key={task.id} className={styles.array_items__task_wrapper}>
                    <div className={styles.task_wrapper__left}>
                        <div className={styles.task_wrapper__text}>{`День ${index + 1}`}</div>
                    </div>
                    <div className={styles.task_wrapper__right}>
                        <div className={styles.task__wrapper__text}>{task.comment}</div>
                        <button onClick={() => deleteTask(task.id)} className={styles.task_wrapper__button}>
                            <img src={deleteIcon} alt='Удалить задачу'></img>
                        </button>
                    </div>
                </div>
            ))}
            {habit.tasks.length < 10 && (
                <form className={styles.array_items__form} onSubmit={handleAddTaskubmit}>
                    <div className={styles.form__left}>
                        <div className={styles.form__left__text}>{`День ${habit.tasks.length + 1}`}</div>
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