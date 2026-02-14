import { NavLink, Outlet } from "react-router-dom"
import ButtonMenu from "../../shared/ui/ButtonMenu/ButtonMenu"
import styles from './LeftMenu.module.css';
import Logomark from '..//../assets/Logomark.svg';
import AddIcon from '..//../assets/add.svg';
import { useHabitsStore } from "../../entities/habit/model/store"
import { iconComponents } from "../../shared/lib/consts/icons"
import Modal from "../../features/add-habit/ui/Modal";

function LeftMenu() {
    const openModal = useHabitsStore(
        (state) => state.openModal
    );
    const habits = useHabitsStore((state) => state.items)

    return (
        <>
            <Modal />
            <div className={styles.layout}>
                <aside className={styles.layout__sidebar}>
                    <div className={styles.sidebar__logo}>
                        <NavLink to="/" className={styles.logo__image}>
                            <img src={Logomark} alt="Логотип" />
                        </NavLink>
                        <h3 className={styles.sidebar__header}>Habbit</h3>
                    </div>
                    <nav className={styles.sidebar__menu}>
                        {habits.map((habit) => {
                            const IconComponent = iconComponents[habit.icon as keyof typeof iconComponents];
                            if (!IconComponent) {
                                return null
                            }

                            return (
                                <ButtonMenu
                                    key={habit.id}
                                    to={`/habits/${habit.id}`}
                                >
                                    {(color) => <IconComponent color={color} />}
                                </ButtonMenu>
                            );
                        })}
                        <button onClick={openModal} className={styles.menu__buttonAdd}>
                            <img src={AddIcon} alt="Добавить привычку" />
                        </button>
                    </nav>
                </aside>
                <main className={styles.layout__content}>
                    <Outlet />
                </main>
            </div >
        </>
    )
}

export default LeftMenu