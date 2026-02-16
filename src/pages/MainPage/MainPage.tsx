import { useHabitsStore } from "../../entities/habit/store/store"

function MainPage() {
    const habits = useHabitsStore((state) => state.items)
    if (habits.length === 0) {
        return <h1>Создайте привычку</h1>
    }

    return (
        <h1>Выберите ваши привычки в левом меню</h1>
    )
}

export default MainPage