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
                <div>
                    <h2>Прогресс</h2>
                    <div>{progress}%</div>
                </div>
            </div>
            <div className={styles.page__tasks}>
                <TaskCard habitID={id} />
            </div>
        </div>
    );
}

export default HabitPage