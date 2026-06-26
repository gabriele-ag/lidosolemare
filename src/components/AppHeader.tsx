import { NavLink } from "react-router";
import { Sun } from 'lucide-react';
import styles from "./CSS/appheader.module.css";

export default function AppHeader() {

    const linkNav = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Ristorante",
            url: "/ristorante"
        },
        {
            title: "Contatti",
            url: "/contatti"
        }
    ];

    return (
        <header className="sticky-top shadow-sm">
            <nav className={`d-flex justify-content-center align-items-center bg-white p-3 ${styles['custom-gap-nav']}`}>
                
                <div className="d-flex align-items-center gap-3">
                    <div className={`p-2 rounded-circle text-white d-flex align-items-center justify-content-center ${styles['sun-box']}`}>
                        <Sun className={`${styles['animate-spin-slow']} ${styles.sun}`}/>
                    </div>
                    <div>
                        <h2 className={`text-dark fs-5 mb-0 ${styles['logo-text']}`}>LIDO SOLEMARE</h2>
                        <p className={`fw-semibold mb-0 colorfont-1`}>Sicily Premium Resort</p>
                    </div>
                </div>

                {/* MENU LINKS */}
                <ul className="d-flex list-unstyled gap-4 mb-0">
                    {linkNav.map((curLink, index) => (
                        <li key={index}>                            
                            <NavLink 
                                className={`fw-semibold text-decoration-none ${styles['custom-navlink']}`} 
                                to={curLink.url}
                            >
                                {curLink.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <NavLink 
                    className={`fw-bold fs-6 rounded-4 text-decoration-none ${styles['custom-button']}`} 
                    to="/prenotaspiaggia">
                    Prenota ora!
                </NavLink>
                
            </nav>       
        </header>
    );
}