import { NavLink } from "react-router";
import { Waves, Utensils, Compass } from 'lucide-react';

import styles from "./CSS/home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <>
            <main>

                {/* HERO */}

                <section className={`position-relative text-white d-flex align-items-center justify-content-center ${styles.hero}`}>
                    <div>
                   
                      <div className={`container d-flex flex-column justify-content-center align-items-center text-center gap-4 ${styles['custom-p']}`}>

                        <div className={`mb-3 text-uppercase border border-warning p-2 fw-bold rounded-pill px-3 shadow-sm small d-inline-block colorfont-1`}>
                          Il tuo angolo di paradiso a San Vito Lo Capo
                        </div>

                        <h1 className={`text-light mb-0 ${styles['hero-h1']}`}>
                          Vivi il Sole della Sicilia nel Massimo Comfort
                        </h1>
                        <p className="fs-5 text-light mb-1">
                          Una baia riservata, sabbia dorata finissima, cucina stellata sul mare e servizi esclusivi pensati per rigenerare corpo e mente.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-4 mt-2">
     
                          <NavLink className={`text-decoration-none fw-bold text-white rounded-4 shadow ${styles['btn-custom-1']}`} to="/prenotaora">
                            Scegli il tuo ombrellone
                          </NavLink>

                          <NavLink className={`fw-bold rounded-4 shadow ${styles['btn-custom-2']}`} to="/ristorante">
                            Esplora il Menu Ristorante
                          </NavLink>
                        </div>
                      </div>
                    </div>
                </section>

                {/* Sezione Servizi */}

                <section className={styles['custom-padding-servizi']}>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center gap-3 flex-column text-center mb-5">
                           
                            <h2 className={styles['hero-h2']}>Servizi esclusivi per un comfort senza compromessi</h2>
                          
                            <div className={`border-warning ${styles.separatore}`}></div>
                            <p className="">Dalla cura delle postazioni in spiaggia alle prelibatezze gourmet del nostro chef, ogni dettaglio è studiato per coccolarti. </p>
                        </div>
                        
                        <div className="d-flex justify-content-center row">
                            
                            <div className="col-md-4 mb-3">
                               
                                <div className={`card h-100 border-0 shadow-sm p-4 ${styles['card-custom']} ${styles['animation-up']}`}>
                                   
                                    <div className={`p-3 mb-4 d-inline-block ${styles['icon-badge']}`}>
                                        <Waves className="h-6 w-6" />
                                    </div>
                                
                                    <h4 className={styles['title-card']}>Spiaggia attrezzata</h4>
                                    <p>Ombrelloni distanziati oltre i limiti di legge, lettini ergonomici in legno e soffici teli mare in spugna inclusi.</p>
                                </div>
                            </div>
                    
                            <div className="col-md-4 mb-3">
                                
                                <div className={`card h-100 border-0 shadow-sm p-4 ${styles['card-custom']} ${styles['animation-up']}`}>
                                   
                                    <div className={`p-3 mb-4 d-inline-block ${styles['icon-badge']}`}>
                                        <Utensils className="h-6 w-6" />
                                    </div>
                                  
                                    <h4 className={styles['title-card']}>Ristorante panoramico</h4>
                                    <p>Pesce freschissimo pescato all'alba, verdure a km zero e un'attenta selezione di etichette e vini bianchi dell'Etna.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3">
                               
                                <div className={`card h-100 border-0 shadow-sm p-4 ${styles['card-custom']} ${styles['animation-up']}`}>
                                  
                                    <div className={`p-3 mb-4 d-inline-block ${styles['icon-badge']}`}>
                                        <Compass className="h-6 w-6" />
                                    </div>
                                
                                    <h4 className={styles['title-card']}>Sport & Wellness</h4>
                                    <p>Corsi mattutini di Yoga sulla battigia, noleggio gratuito di tavole da Stand Up Paddle (SUP) e canoe canadesi.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}