import { Sun } from "lucide-react";

import styles from "./CSS/appfooter.module.css";

export default function AppFooter() {

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
                
            </nav>       
        </footer>
    );
}
