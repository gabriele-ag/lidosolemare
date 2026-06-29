
import { NavLink } from "react-router";

import styles from "./CSS/burgermenu.module.css"

interface BurgerMenuProps {
    isOpen: boolean;
    onClose: () => void
}

export default function BurgerMenu({isOpen, onClose}: BurgerMenuProps) {

    const linkNav = [
       { title: "Home", url: "/" },
       { title: "Ristorante", url: "/ristorante" },
       { title: "Contatti", url: "/contatti" },
       { title: "PrenotaOra", url: "/prenotaora"}
     ];


    return (
        <div className={`d-flex d-lg-none ${styles.burgerMenu} ${isOpen ? styles.menuOpen : ""}`}>
            <div className="container">
                <ul className="d-flex flex-column gap-3 list-unstyled fw-semibold">
                    {linkNav.map((curLink, index) => (
                        <li key={index} className={styles.navLinkBurger}>
                            <NavLink className={`text-decoration-none ${styles.navLinkBurger}`} to={curLink.url} onClick={onClose}>{curLink.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}