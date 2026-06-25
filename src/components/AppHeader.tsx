import { NavLink } from "react-router"
import { Sun } from 'lucide-react';
import "./CSS/appheader.css"

export default function AppHeader() {

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
        <header className="sticky-top">
            <nav className="d-flex justify-content-center align-items-center bg-white text-light p-3 custom-gap-nav">
                
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="sun-box p-2 rounded-circle text-white d-flex align-items-center justify-content-center">
                          <Sun className="sun animate-spin-slow"/>
                    </div>
                    <div>
                        <h2 className="logo-text text-dark fs-5 mb-0">LIDO SOLEMARE</h2>
                        <p className="colorfont-1 fw-semibold mb-0">Sicily Premium Resort</p>
                    </div>
                </div>

                <ul className="d-flex justify-content-between list-unstyled gap-4 mb-0">
                        {linkNav.map((curLink, index) => (
                            <li key={index}>                            
                                <NavLink className="custom-navlink fw-semibold text-decoration-none" to={curLink.url}>{curLink.title}</NavLink>
                            </li>
                        ))}
                </ul>

                <NavLink className="custom-button text-light fw-bold fs-6 rounded-4" to={"/PrenotaSpiaggia"}>Prenota ora!</NavLink>
            </nav>       
        </header>
    )
}