import { NavLink } from "react-router";
import { Sun } from "lucide-react";
import styles from "./CSS/appheader.module.css";

export default function AppHeader() {
  const linkNav = [
    { title: "Home", url: "/" },
    { title: "Ristorante", url: "/ristorante" },
    { title: "Contatti", url: "/contatti" },
  ];

  return (
    <header
      className={`d-flex align-items-center sticky-top shadow-sm bg-white ${styles.customHeader}`}
    >
      <nav
        className={`container d-flex justify-content-between align-items-center`}
      >
        {/* LOGO (Sempre visibile su qualsiasi schermo) */}
        <div className="d-flex align-items-center gap-3 flex-shrink-0">
          <div
            className={`rounded-circle text-white d-flex align-items-center justify-content-center ${styles["sun-box"]}`}
          >
            <Sun className={`${styles["animate-spin-slow"]} ${styles.sun}`} />
          </div>
          <div>
            <h2 className={`text-dark fs-5 mb-0 ${styles["logo-text"]}`}>
              LIDO SOLEMARE
            </h2>
            <p className="fw-semibold mb-0 colorfont-1 small">
              Sicily Premium Resort
            </p>
          </div>
        </div>

        <ul className="d-none d-lg-flex list-unstyled gap-4 mb-0 align-items-center">
          {linkNav.map((curLink, index) => (
            <li key={index}>
              <NavLink
                className={`fw-semibold text-decoration-none ${styles["custom-navlink"]}`}
                to={curLink.url}
              >
                {curLink.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          className={`d-none d-lg-inline-block fw-bold fs-6 rounded-4 text-decoration-none ${styles.customButton}`}
          to="/prenotaora"
        >
          Prenota ora!
        </NavLink>

        {/* 🍔 FUTURO SPAZIO BURGER MENU (Visibile SOLO su mobile, scompare da tablet in su) */}
        <button
          className="btn d-lg-none border-0 p-1 text-dark flex-shrink-0"
          onClick={() => alert("Apri Burger Menu simulato")}
        >
          {/* Qui metterai l'icona <Menu /> di lucide-react in seguito */}
          <span className="fs-3">☰</span>
        </button>
      </nav>
    </header>
  );
}
