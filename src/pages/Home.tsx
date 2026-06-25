import { NavLink } from "react-router"
import { Waves, Utensils, Compass } from 'lucide-react';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/home.css"

export default function Home() {
    return (
        <>
        <main>

        {/* HERO */}
            <section className="hero position-relative text-white d-flex align-items-center justify-content-center">
                <div className="hero-img">
                  <div className="container custom-p d-flex flex-column justify-content-center align-items-center text-center gap-4">

                    <div className="mb-3 colorfont-1 text-uppercase border border-warning p-2 fw-bold rounded-pill px-3 shadow-sm small d-inline-block">
                      Il tuo angolo di paradiso a San Vito Lo Capo
                    </div>

                    <h1 className="hero-h1 text-light mb-0">
                      Vivi il Sole della Sicilia nel Massimo Comfort
                    </h1>

                    <p className="fs-5 text-light mb-1">
                      Una baia riservata, sabbia dorata finissima, cucina stellata sul mare e servizi esclusivi pensati per rigenerare corpo e mente.
                    </p>

                    <div className="d-flex flex-wrap justify-content-center gap-4 mt-2">
                      <NavLink className="btn-custom-1 text-decoration-none fw-bold text-white rounded-4 shadow" to={"/spiaggia"}>
                        Scegli il tuo ombrellone
                      </NavLink>
                      <NavLink className="btn-custom-2 fw-bold rounded-4 shadow" to={"/ristorante"}>
                        Esplora il Menu Ristorante
                      </NavLink>
                    </div>

                  </div>
                </div>
            </section>

            {/* Sezione Servizi */}
            <section className="custom-padding-servizi">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center gap-3 flex-column text-center mb-5">
                        <h2 className="hero-h2">Servizi esclusivi per un comfort senza compromessi</h2>
                        <div className="separatore border-warning"></div>
                        <p className="">Dalla cura delle postazioni in spiaggia alle prelibatezze gourmet del nostro chef, ogni dettaglio è studiato per coccolarti. </p>
                    </div>

                    <div className="d-flex justify-content-center row">
                        <div className="col-md-4">
                            <div className="card-custom card h-100 border-0 shadow-sm p-4 animation-up">
                                <div className="p-3 mb-4 d-inline-block icon-badge">
                                    <Waves className="h-6 w-6" />
                                </div>
                                <h4 className="title-card">Spiaggia attrezzata</h4>
                                <p>Ombrelloni distanziati oltre i limiti di legge, lettini ergonomici in legno e soffici teli mare in spugna inclusi.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card-custom card h-100 border-0 shadow-sm p-4 animation-up">
                                <div className="p-3 mb-4 d-inline-block icon-badge">
                                    <Utensils className="h-6 w-6" />
                                </div>
                                <h4 className="title-card">Ristorante panoramico</h4>
                                <p>Pesce freschissimo pescato all'alba, verdure a km zero e un'attenta selezione di etichette e vini bianchi dell'Etna.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card-custom card h-100 border-0 shadow-sm p-4 animation-up">
                                <div className="p-3 mb-4 d-inline-block icon-badge">
                                    <Compass className="h-6 w-6" />
                                </div>
                                <h4 className="title-card">Sport & Wellness</h4>
                                <p>Corsi mattutini di Yoga sulla battigia, noleggio gratuito di tavole da Stand Up Paddle (SUP) e canoe canadesi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}