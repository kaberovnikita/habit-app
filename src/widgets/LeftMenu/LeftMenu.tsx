import { Outlet, useNavigate } from "react-router-dom"
import ButtonMenu from "../../shared/ui/ButtonMenu/ButtonMenu"
import styles from './LeftMenu.module.css';
import Logomark from '..//../assets/Logomark.svg';
import AddIcon from '..//../assets/add.svg';
import { useHabitsStore } from "../../entities/habit/store/store"
import { iconComponents } from "../../shared/lib/consts/icons"
import Modal from "../../features/habit/Modal";

function LeftMenu() {
    const navigate = useNavigate()
    const { openModal, items } = useHabitsStore();
    const openModalOnPage = () => {
        if (items.length === 3) {
            return
        }
        openModal()
    }

    const handleLogoClick = () => {
        if (items.length > 0) {
            navigate(`/habits/${items[0].id}`, { replace: true })
        } else {
            navigate("/", { replace: true })
        }
    }

    return (
        <>
            <Modal />
            <div className={styles.layout}>
                <aside className={styles.layout__sidebar}>
                    <div className={styles.sidebar__logo}>
                        <button onClick={handleLogoClick} className={styles.logo__image}>
                            <img src={Logomark} alt="Логотип" />
                        </button>
                        <h3 className={styles.sidebar__header}>Habbit</h3>
                    </div>
                    <nav className={styles.sidebar__menu}>
                        {items.map((item) => {
                            const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];
                            if (!IconComponent) {
                                return null
                            }

                            return (
                                <ButtonMenu
                                    key={item.id}
                                    to={`/habits/${item.id}`}
                                >
                                    {(color) => <IconComponent color={color} />}
                                </ButtonMenu>
                            );
                        })}
                        <button onClick={openModalOnPage} className={styles.menu__buttonAdd}>
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