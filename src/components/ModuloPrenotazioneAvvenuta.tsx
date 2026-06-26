import styles from "./CSS/moduloprenotazioneavvenuta.module.css";
import { CheckCircle, X } from "lucide-react";

interface ModalPrenotazioneAvvenuta {
  isOpen: boolean;
  ombrellone: { id: string; fila: number; colonna: number } | null;
  dataPrenotazione: string;
  prezzo: number;
  onClose: () => void;
}

export default function ModuloPrenotazioneAvvenuta({
  isOpen,
  ombrellone,
  dataPrenotazione,
  prezzo,
  onClose,
}: ModalPrenotazioneAvvenuta) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={`rounded-3 ${styles.customModalContent}`}>
        <div className="d-flex justify-content-end mb-3">
          <button className={styles.buttonOnClose} onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="d-flex flex-column align-items-center text-center mb-4">
          <div className={`rounded-5 ${styles.successIconBox}`}>
            <CheckCircle className={styles.checkCircle} />
          </div>

          <h3 className={`text-dark mt-3 ${styles.titleModule}`}>
            Posto riservato!
          </h3>
          <p className="text-muted small">
            Prenotazione simulata andata a buon fine!
          </p>
        </div>

        {ombrellone && (
          <div className="w-100 mb-4 bg-light p-3 rounded-3 border">
            <div className="d-flex justify-content-between py-1 small">
              <span className="text-secondary">Postazione Ombrellone:</span>
              <span className="fw-bold text-dark">{ombrellone.id}</span>
            </div>
            <div className="d-flex justify-content-between py-1 small">
              <span className="text-secondary">Data Prenotazione:</span>
              <span className="fw-bold text-dark">{dataPrenotazione}</span>
            </div>
            <hr className="my-2 opacity-25" />
            <div className="d-flex justify-content-between align-items-center pt-1">
              <span className="fw-bold text-dark">Importo Pagato:</span>
              <span className={`fw-bold fs-5 ${styles.prezzoPagato}`}>
                {prezzo}€
              </span>
            </div>
          </div>
        )}

        <button
          className="btn btn-dark w-100 fw-bold py-2 rounded-3 text-white"
          onClick={onClose}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}

// export default function ModuloPrenotazioneAvvenuta({isOpen, ombrellone, dataPrenotazione, prezzo, onClose} : ModalPrenotazioneAvvenuta) {
//     if (!isOpen) return null;

//     return (
//         <div className={styles.modalBackground}>
//             <div className={styles.customModalContent}>
//                 <button className={styles.buttonOnClose} onClick={onClose}>
//                     <X></X>
//                 </button>

//                 <div className="d-flex flex-column">
//                     <div className={styles.successIcon}>
//                         <CheckCircle className="text-success"/>
//                     </div>
//                     <h3 className="text-dark">Posto riservato!</h3>
//                     <p>Prenotazione simulata andata a buon fine!</p>
//                 </div>

//                 <div>

//                 </div>
//             </div>
//         </div>
//     )
// }
