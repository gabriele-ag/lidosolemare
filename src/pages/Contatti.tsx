import styles from "./CSS/contatti.module.css"
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contatti() {
    return (
        <section className="container">
            <div className={styles.customPaddingContatti}>
                <div className={`d-flex justify-content-center align-items-center flex-column mb-5`}>
                    <h1>Dove Trovarci & Contatti</h1>
                    <p>Siamo pronti ad accoglierti e a guidarti nel cuore barocco della costa sicula</p>
                </div>

          <div className="row g-4">
          
          {/* COLONNA SINISTRA: INFORMAZIONI PRATICHE */}
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm p-4 p-md-5 bg-white">
              <div className="border-bottom pb-2">
                <h3 className="fw-bold text-dark h4">Informazioni Pratiche</h3>
              </div>
              
              <div className="d-flex flex-column gap-4 pb-4 pt-4">
                
                {/* 1. Posizione */}
                <div className="d-flex align-items-start gap-3">
                  <div className={`p-2 rounded-3 d-flex align-items-center justify-content-center ${styles['icon-badge']}`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1 fs-6">Posizione</h5>
                    <p className="text-secondary small mb-0">Viale della Spiaggia Dorata, 42 • 96017 Noto (Siracusa), Sicilia</p>
                  </div>
                </div>

                {/* 2. Orari */}
                <div className="d-flex align-items-start gap-3">
                  <div className={`p-2 rounded-3 d-flex align-items-center justify-content-center ${styles['icon-badge']}`}>
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1 fs-6">Orari di Apertura</h5>
                    <p className="text-secondary small mb-0">Spiaggia: 08:30 - 19:30 • Ristorante: 12:30 - 15:30, 20:00 - 23:30</p>
                  </div>
                </div>

                {/* 3. Assistenza */}
                <div className="d-flex align-items-start gap-3">
                  <div className={`p-2 rounded-3 d-flex align-items-center justify-content-center ${styles['icon-badge']}`}>
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1 fs-6">Assistenza & WhatsApp</h5>
                    <p className="text-secondary small mb-0">+39 0931 1234567 • Servizio di concierge attivo 24/7</p>
                  </div>
                </div>

                {/* 4. Email */}
                <div className="d-flex align-items-start gap-3">
                  <div className={`p-2 rounded-3 d-flex align-items-center justify-content-center ${styles['icon-badge']}`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="fw-bold text-dark mb-1 fs-6">Email di Supporto</h5>
                    <p className="text-secondary small mb-0">prenotazioni@lidosolemare.it</p>
                  </div>
                </div>

              </div>

              {/* Footer della Card con Partita IVA e CIR */}
              <div className={`mt-auto pt-4 border-top d-flex justify-content-between align-items-center text-muted ${styles.customFontInfo}`}>
                <span>Partita IVA: IT09876543210</span>
                <span>Codice CIR: 19089013C223400</span>
              </div>

            </div>
          </div>

          <div className="col-lg-6">
            <div className={`h-100 p-4 p-md-5 d-flex flex-column justify-content-end text-white shadow-sm ${styles['info-image-card']}`}>
              
              <div className="mb-3">
                <span className="badge bg-warning text-dark text-uppercase fw-bold px-3 py-2 rounded-pill small">
                  Riserva Naturale
                </span>
              </div>
              
              <h3 className="fw-bold mb-3 text-white">
                Immerso nell'Oasi di Vendicari
              </h3>
              
              <p className="text-light opacity-90 mb-0 leading-relaxed">
                Siamo situati a pochi passi dalle spiagge protette e dall'architettura barocca di Noto, in un'area riparata dai venti per un mare calmo e limpido.
              </p>

            </div>
          </div>

        </div>
        </div>                                             
        </section>
    )
}