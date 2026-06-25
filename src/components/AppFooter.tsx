import "./CSS/appfooter.css";
import { NavLink } from "react-router";

import { Sun } from "lucide-react";

export default function AppFooter() {

    const linkNav = [{
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
    }]

  return (
    <footer className="footer-bg">
      <nav className="d-flex justify-content-between align-items-center text-light p-3 custom-gap-nav">
                
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="sun-box-footer p-2 rounded-circle text-white d-flex align-items-center justify-content-center">
                          <Sun className=""/>
                    </div>
                    <div>
                        <h2 className="fw-bolder text-white fs-6 mb-0">LIDO SOLEMARE</h2>
                        <p className="copyright mb-0">© 2026 Lido SoleMare SRL. Tutti i diritti riservati.</p>
                    </div>
                </div>

                <ul className="d-flex justify-content-between list-unstyled gap-4 mb-0">
                        {linkNav.map((curLink, index) => (
                            <li key={index}>                            
                                <NavLink className="custom-navlink-footer fw-semibold text-decoration-none" to={curLink.url}>{curLink.title}</NavLink>
                            </li>
                        ))}
                </ul>               
            </nav>       
    </footer>
  );
}
