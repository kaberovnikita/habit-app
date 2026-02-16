import { useParams } from "react-router-dom"
import { useHabitsStore } from "../../entities/habit/store/store"
import styles from './HabitPage.module.css';
import TaskCard from "../../features/task/TaskCard";

function HabitPage() {
    const { id } = useParams()
    if (!id) {
        return
    }
    const habit = useHabitsStore((state) => {
        return state.items.find((habit) => habit.id === id)
    })
    if (!habit) {
        return
    }

    const progress = Math.round((habit.tasks.length / Number(habit.target)) * 100)
    return (
        <div className={styles.page}>
            <div className={styles.page__header_content}>
                <h1 className={styles.page__header_content_title}>{habit.title}</h1>
                <div className={styles.page__header__wrapper}>
                    <h2 className={styles.wrapper__title}>Прогресс</h2>
                    <div className={styles.wrapper__percent}>{progress}%</div>
                </div>
            </div>
            <TaskCard habitID={id} />
        </div>
    );
}

export default HabitPage