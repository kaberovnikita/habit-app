import { Outlet } from "react-router-dom"
import ButtonMenu from "../../shared/ui/ButtonMenu/ButtonMenu"
import IconSport from "../../shared/ui/IconSport/IconSport"
import IconBottle from "../../shared/ui/IconBottle/IconBottle"
import IconFood from "../../shared/ui/IconFood/IconFood"
import styles from './LeftMenu.module.css';
import Logomark from '..//../assets/Logomark.svg';

function LeftMenu() {
    return (
        <div className={styles.layout}>
            <aside className={styles.layout__sidebar}>
                <div className={styles.sidebar__logo}>
                    <div className={styles.logo__image}>
                        <img src={Logomark} alt="Логотип" />
                    </div>
                    <h3 className={styles.sidebar__header}>Habbit</h3>
                </div>
                <nav className={styles.sidebar__menu}>
                    <ButtonMenu to="/sport">
                        {(color) => <IconSport color={color} />}
                    </ButtonMenu>
                    <ButtonMenu to="/bottle">
                        {(color) => <IconBottle color={color} />}
                    </ButtonMenu>
                    <ButtonMenu to="/food">
                        {(color) => <IconFood color={color} />}
                    </ButtonMenu>

                </nav>
            </aside>
            <main className={styles.layout__content}>
                <Outlet />
            </main>
        </div >
    )
}

export default LeftMenu