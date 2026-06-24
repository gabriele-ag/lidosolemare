import {NavLink} from "react-router"

export default function AppHeader() {

    const linkNav = [{
        title: "Home",
        url: "/"
    },
    {
        title: "Prenota Spiaggia",
        url: "/Prenotaspiaggia"
    },
    {
        title: "Ristorante",
        url: "/Ristorante"
    },
    {
        title: "Contatti",
        url: "/Contatti"
    }]

    return (
        <header>
            <div className="d-flex justify-content-between bg-primary text-light">
                
                <div>Logo</div>

                <ul className="d-flex justify-content-between gap-3">
                        {linkNav.map((curLink, index) => (
                            <li key={index}>                            
                                <NavLink className="text-light" to={curLink.url}>{curLink.title}</NavLink>
                            </li>
                        ))}
                </ul>

                <button>Prenota ora!</button>
            </div>       
        </header>
    )
}