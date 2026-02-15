import { useNavigate, useParams } from "react-router-dom"
import { useHabitsStore } from "../../entities/habit/model/store"
import { useEffect } from "react";
import styles from './HabitPage.module.css';
import TaskCard from "../../features/add-task/ui/TaskCard";

function HabitPage() {
    const navigate = useNavigate();
    const { id } = useParams()
    const habit = useHabitsStore((state) => {
        return state.items.find((habit) => habit.id === id)
    })

    useEffect(() => {
        if (!habit) {
            navigate("/", { replace: true });
        }
    }, [habit, navigate]);

    if (!habit) {
        return null
    }

    return (
        <div className={styles.page}>
            <div className={styles.page__header_content}>
                <h1 className={styles.page__header_content_title}>{habit.title}</h1>
                <div>Прогресс бар</div>
            </div>
            <div className={styles.page__tasks}>
                <TaskCard />
            </div>
        </div>
    );
}

export default HabitPage