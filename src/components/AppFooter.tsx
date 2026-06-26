import { NavLink } from "react-router";
import { Sun } from "lucide-react";

import styles from "./CSS/appfooter.module.css";

export default function AppFooter() {

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
        <footer>

            <nav className={`d-flex justify-content-between align-items-center text-light p-3 ${styles['custom-gap-nav']}`}>
                
                <div className="d-flex align-items-center gap-3">
                    <div className={`p-2 rounded-circle text-white d-flex align-items-center justify-content-center ${styles['sun-box-footer']}`}>
                        <Sun />
                    </div>
                    <div>
                        <h2 className="fw-bolder text-white fs-6 mb-0">LIDO SOLEMARE</h2>
                        <p className={`mb-0 ${styles.copyright}`}>© 2026 Lido SoleMare SRL. Tutti i diritti riservati.</p>
                    </div>
                </div>


                <ul className="d-flex list-unstyled gap-4 mb-0">
                    {linkNav.map((curLink, index) => (
                        <li key={index}>                            
                            <NavLink 
                                className={`fw-semibold text-decoration-none ${styles['custom-navlink-footer']}`} 
                                to={curLink.url}
                            >
                                {curLink.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>               
                
            </nav>       
        </footer>
    );
}
