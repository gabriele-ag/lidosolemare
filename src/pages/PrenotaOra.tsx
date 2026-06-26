import { useState } from "react";
import { Calendar, Sun} from "lucide-react";
import styles from "./CSS/prenota.module.css";
import ModuloPrenotazioneAvvenuta from "../components/ModuloPrenotazioneAvvenuta";

// Tariffe fisse a seconda della fila (più vicino al mare costa di più)
const prezzoFila = (fila: number) => {
  if (fila === 1) return 30;
  if (fila <= 3) return 25;
  return 20;
};

export default function PrenotaOra() {
  const dataCorrente = new Date().toISOString().split("T")[0];

  const [dataPrenotazione, setDataPrenotazione] = useState(dataCorrente);
  const [ombrelloneSelezionato, setOmbrelloneSelezionato] = useState<{
    id: string;
    fila: number;
    colonna: number;
  } | null>(null);
  const [mostraModuloPrenotazione, setMostraModuloPrenotazione] =
    useState(false);

  const ombrelloniOccupati = [
    "R1C3",
    "R1C6",
    "R2C5",
    "R3C3",
    "R3C7",
    "R4C4",
    "R5C3",
    "R5C7",
  ];

  const righe = [1, 2, 3, 4, 5];
  const colonne = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSelezionaOmbrellone = (
    id: string,
    fila: number,
    colonna: number,
  ) => {
    if (ombrelloniOccupati.includes(id)) return;

    if (ombrelloneSelezionato?.id === id) {
      setOmbrelloneSelezionato(null);
    } else {
      setOmbrelloneSelezionato({ id, fila, colonna });
    }
  };

  const resetta = () => {
    setMostraModuloPrenotazione(false);
    setOmbrelloneSelezionato(null);
  };

  const prezzoFinale = ombrelloneSelezionato
    ? prezzoFila(ombrelloneSelezionato.fila)
    : 0;

  return (
    <section className="sectionPadding">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold text-dark">
            Prenota il tuo Posto in Spiaggia
          </h2>
          <p className="text-muted">
            Seleziona una data, clicca su un ombrellone verde (libero) e scopri
            i dettagli e le tariffe.
          </p>
        </div>

        <div className="row g-4">
          {/* COLONNA SINISTRA: MAPPA SPIAGGIA */}
          <div className="col-lg-8">
            <div className="card border-0 rounded-5 shadow-sm p-4 bg-white">
              {/* Selettore Data */}
              <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                <div className="d-flex align-items-center gap-2 text-dark fw-semibold">
                  <Calendar className="text-warning" size={20} />
                  <span>Data Prenotazione:</span>
                </div>
                <input
                  type="date"
                  className="form-control w-auto border rounded-3 px-2 py-1 shadow-sm small"
                  min={dataCorrente}
                  value={dataPrenotazione}
                  onChange={(e) => {
                    setDataPrenotazione(e.target.value);
                    setOmbrelloneSelezionato(null);
                  }}
                />
              </div>

              {/* Griglia Ombrelloni */}
              <div className="d-flex flex-column gap-3 align-items-center mb-4 py-2">
                {righe.map((curFila) => (
                  <div
                    key={curFila}
                    className="d-flex flex-wrap gap-3 justify-content-center"
                  >
                    {colonne.map((colonna) => {
                      const id = `R${curFila}C${colonna}`;
                      const isOccupato = ombrelloniOccupati.includes(id);
                      const isSelezionato = ombrelloneSelezionato?.id === id;

                      const classiBottone = [
                        "btn d-flex flex-column align-items-center justify-content-center rounded-3 shadow-sm",
                        styles.customButtonOmbrellone,
                        isOccupato
                          ? "btn-danger"
                          : isSelezionato
                            ? styles.ombrelloneSelezionato
                            : `text-light ${styles.ombrelloneDisponibile}`,
                      ].join(" ");

                      return (
                        <button
                          key={id}
                          disabled={isOccupato}
                          onClick={() =>
                            handleSelezionaOmbrellone(id, curFila, colonna)
                          }
                          className={classiBottone}
                        >
                          <span className="fw-bold">{id}</span>
                          <Sun size={14} className="mt-1" />
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legenda */}
              <div className="d-flex justify-content-center gap-4 border-top pt-3 flex-wrap small text-muted">
                <div className="d-flex align-items-center gap-2">
                  <span
                    className={`d-inline-block rounded-circle ${styles.indicatore} ${styles.indicatoreDisponibile}`}
                  ></span>{" "}
                  Disponibile
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span
                    className={`d-inline-block rounded-circle bg-danger ${styles.indicatore} `}
                  ></span>{" "}
                  Occupato
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span
                    className={`d-inline-block rounded-circle ${styles.indicatore} ${styles.indicatoreSelezionato}`}
                  ></span>{" "}
                  Selezionato
                </div>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: RIEPILOGO SELEZIONE */}
          <div className="col-lg-4">
            <div className="card border-0 rounded-5 shadow-sm p-4 bg-white h-100">
              <h4 className="fw-bold text-dark mb-4 h5">Riepilogo Selezione</h4>

              {ombrelloneSelezionato ? (
                <div className="d-flex flex-column h-100 justify-content-between">
                  <div className="bg-light p-3 rounded-3 border mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Posto Scelto:</span>
                      <span className="fw-bold text-dark">
                        {ombrelloneSelezionato.id}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Posizione:</span>
                      <span className="text-dark">
                        {ombrelloneSelezionato.fila === 1
                          ? "Fronte Mare 🌊"
                          : `Fila ${ombrelloneSelezionato.fila}`}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">Tariffa Giornaliera:</span>
                      <span className={`fw-bold ${styles.prezzo}`}>
                        {prezzoFila(ombrelloneSelezionato.fila)}€
                      </span>
                    </div>
                    <div className="border-top pt-2 d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-dark">
                        Totale Preventivo:
                      </span>
                      <span className={`fw-bold fs-4 ${styles.prezzo}`}>
                        {prezzoFila(ombrelloneSelezionato.fila)}€
                      </span>
                    </div>
                  </div>

                  <button
                    className={`btn w-100 fw-bold py-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 text-dark mt-auto ${styles.buttonPrenotazione}`}
                    onClick={() => setMostraModuloPrenotazione(true)}
                  >
                    Prenota
                  </button>
                </div>
              ) : (
                <div className="text-center my-auto py-5 d-flex flex-column align-items-center justify-content-center text-muted">
                  <Sun
                    size={48}
                    className="text-warning opacity-50 mb-3 animate-pulse"
                  />
                  <p className="fw-medium mb-1 small text-dark">
                    Nessun ombrellone selezionato
                  </p>
                  <p className="explicit-small px-3">
                    Clicca su uno degli ombrelloni verdi liberi nella mappa per
                    calcolare il preventivo in tempo reale.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <ModuloPrenotazioneAvvenuta
          isOpen={mostraModuloPrenotazione}
          ombrellone={ombrelloneSelezionato}
          dataPrenotazione={dataPrenotazione}
          prezzo={prezzoFinale}
          onClose={resetta}
        />
      </div>
    </section>
  );
}
