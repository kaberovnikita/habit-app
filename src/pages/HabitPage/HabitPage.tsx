import { useNavigate, useParams } from "react-router-dom"
import { useHabitsStore } from "../../entities/habit/model/store"
import { useEffect } from "react";

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

    return <h1>{habit.title}</h1>;
}

export default HabitPage