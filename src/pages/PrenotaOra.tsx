import styles from "./CSS/prenota.module.css"

export default function PrenotaOra() {
    return (
        <section className={styles.sectionPaddingPrenota}>
            <div className="container">
                    <div>
                        <h2 className="fw-bold">Prenota ora il tuo posto in spiaggia</h2>
                        <p>Seleziona una data, clicca su un ombrellone verde (libero) e scopri i dettagli e le tariffe.</p>
                    </div>
            </div>       
        </section>
    )
}