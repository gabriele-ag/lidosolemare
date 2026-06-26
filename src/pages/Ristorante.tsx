import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from "./CSS/ristorante.module.css";

export default function Ristorante() {

    const piattiData = [
        { id: 1, titolo: "Spaghetti alle Vongole", prezzo: "18€", desc: "Vongole veraci, aglio, prezzemolo fresco, sfumate con Grillo siciliano.", cat: "PRIMI", tags: { tradizionale: true } },
        { id: 2, titolo: "Busiate alla Trapanese", prezzo: "15€", desc: "Pesto fresco di mandorle di Avola, pomodoro pachino fresco, aglio e basilico.", cat: "PRIMI", tags: { vegano: true } },
        { id: 3, titolo: "Frittura Mista dello Ionio", prezzo: "22€", desc: "Calamari, gamberi rossi locali e paranza fritti in una panatura croccante leggera.", cat: "SECONDI", tags: { senzaGlutine: true } },
        { id: 4, titolo: "Caponata Classica Sicula", prezzo: "10€", desc: "Melanzane, sedano, cipolle rosse, olive verdi, capperi in salsa agrodolce.", cat: "ANTIPASTI", tags: { senzaGlutine: true, vegano: true } },
        { id: 5, titolo: "Polpo e Patate Tiepido", prezzo: "16€", desc: "Polpo verace bollito morbido, patate novelle, scorza di limone e olio d'oliva.", cat: "ANTIPASTI", tags: { senzaGlutine: true } },
        { id: 6, titolo: "Sorbetto al Limone Bio", prezzo: "6€", desc: "Preparato in modo artigianale con limoni biologici locali spremuti a freddo.", cat: "DESSERT", tags: { senzaGlutine: true, vegano: true } },
        { id: 7, titolo: "Spritz al Mandarino", prezzo: "9€", desc: "Aperol, prosecco siciliano DOC, soda e sciroppo profumato al mandarino tardivo.", cat: "DRINK", tags: { senzaGlutine: true, vegano: true } },
        { id: 8, titolo: "Busiate alla Norma", prezzo: "14€", desc: "Pasta tipica con salsa di pomodoro fresco, melanzane fritte, ricotta salata e basilico.", cat: "PRIMI", tags: { tradizionale: true } },
        { id: 9, titolo: "Gnocchetti al Pistacchio", prezzo: "16€", desc: "Gnocchi di patate artigianali con pesto puro di Pistacchio di Bronte e scorza d'arancia.", cat: "PRIMI", tags: { vegano: true } },
        { id: 10, titolo: "Tagliata di Tonno Alalunga", prezzo: "20€", desc: "Tonno locale scottato in crosta di sesamo nero, servito con cipolle rosse in agrodolce.", cat: "SECONDI", tags: { senzaGlutine: true } },
        { id: 11, titolo: "Involtini di Pesce Spada", prezzo: "19€", desc: "Sottili fettine di spada farcite con uvetta, pinoli, pangrattato e profumo di alloro.", cat: "SECONDI", tags: { tradizionale: true } },
        { id: 12, titolo: "Sorbetto al Limone Bio", prezzo: "6€", desc: "Preparato in modo artigianale con limoni biologici locali spremuti a freddo.", cat: "DESSERT", tags: { senzaGlutine: true, vegano: true } },
        { id: 13, titolo: "Cannolo Scomposto al Vetro", prezzo: "7€", desc: "Cialda croccante al cacao con crema di ricotta di pecora zuccherata e gocce di cioccolato di Modica.", cat: "DESSERT", tags: { tradizionale: true } },
        { id: 14, titolo: "Spritz al Mandarino", prezzo: "9€", desc: "Aperol, prosecco siciliano DOC, soda e sciroppo profumato al mandarino tardivo.", cat: "DRINK", tags: { senzaGlutine: true, vegano: true } },
        { id: 15, titolo: "Sicily Mule al Limoncello", prezzo: "10€", desc: "Limoncello artigianale, vodka premium, succo di lime fresco e ginger beer piccante.", cat: "DRINK", tags: { senzaGlutine: true, vegano: true } }
    ];

    const [categoriaAttiva, setCategoriaAttiva] = useState("TUTTO IL MENU");
    const [search, setSearch] = useState("");
    const [senzaGlutine, setSenzaGlutine] = useState(false);
    const [vegano, setVegano] = useState(false);

    const piattiFiltrati = piattiData.filter(curPiatto => {
        const matchCat = categoriaAttiva === "TUTTO IL MENU" || curPiatto.cat === categoriaAttiva;
        const matchSearch = curPiatto.titolo.toLowerCase().includes(search.toLowerCase()) || curPiatto.desc.toLowerCase().includes(search.toLowerCase());
        const matchSenzaGlutine = senzaGlutine === !!curPiatto.tags.senzaGlutine
        const matchVegano = vegano === !!curPiatto.tags.vegano;

        if (!senzaGlutine && !vegano) {
            return matchCat && matchSearch
        }

        return matchCat && matchSearch && matchSenzaGlutine && matchVegano;
    })


    return (
        <section className={styles.sectionPaddingRistorante}>
            <div className="container">
                <div className="row align-items-center mb-4">
                    <div className="col-md-8">
                        <h2 className="fw-bold">Ristorante Sapore di Mare</h2>
                        <p>Un viaggio culinario unico, preparato con il pescato fresco e ingredienti della terra siciliana.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="input-group bg-white rounded-3 shadow-sm px-3 py-1 align-items-center border">
                            <Search className="text-muted me-2"></Search>
                            <input 
                            type="text"
                            className="form-control border-0 shadow-none ps-0 small" 
                            value={search}
                            placeholder="Cerca un piatto..."
                            onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>

                {/* FILTRI */}
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 mb-3">

                    {/* FILTRO CATEGORIA PIATTO */}
                    <div className="d-flex flex-wrap gap-2">
                        {["TUTTO IL MENU", "ANTIPASTI", "PRIMI", "SECONDI", "DESSERT", "DRINK"].map((curElem) => (
                            <button
                            key={curElem}
                            onClick={() => setCategoriaAttiva(curElem)}
                            className={`btn btn-sm fw-bold px-3 py-2 rounded-3 transition-all ${
                            categoriaAttiva === curElem 
                                ? `${styles.btnFiltroCategoriaAttivo}`
                                : 'btn-white bg-white border text-secondary shadow-sm'
                            }`}>
                                   {curElem}     
                            </button>
                        ))}                  
                    </div>
                        
                    {/* FILTRO SENZAGLUTINE & VEGANO */}
                    <div className="d-flex gap-4 bg-white p-3 rounded-3 border shadow-sm flex-wrap">
                        <label className="d-flex align-items-center gap-2 cursor-pointer small fw-semibold text-dark mb-0">
                          <input 
                            type="checkbox" 
                            checked={senzaGlutine} 
                            onChange={(e) => setSenzaGlutine(e.target.checked)}
                            className="form-check-input mt-0"
                          />
                          Senza Glutine 🌾
                        </label>
                        <label className="d-flex align-items-center gap-2 cursor-pointer small fw-semibold text-dark mb-0">
                          <input 
                            type="checkbox" 
                            checked={vegano} 
                            onChange={(e) => setVegano(e.target.checked)}
                            className="form-check-input mt-0"
                          />
                          Vegano 🌱
                        </label>
                    </div>

                </div>

                <div className="row g-4">
                   {piattiFiltrati.map((piatto) => (
                     <div className="col-md-6 col-lg-4 gap-3" key={piatto.id}>
                       <div className="card h-100 border-0 shadow-sm p-4 bg-white hover-lift" style={{ borderRadius: '20px' }}>
                         <div className="d-flex justify-content-between align-items-start mb-3">
                           <h4 className="fw-bold text-dark h5 mb-0 pe-2">{piatto.titolo}</h4>
                           <span className="fw-bold text-success h5 mb-0">{piatto.prezzo}</span>
                         </div>
                         <p className="text-secondary small leading-relaxed mb-4 flex-grow-1">
                           {piatto.desc}
                         </p>

                         {/* Badge dei Tag in basso */}
                         <div className="d-flex flex-wrap gap-2 mt-auto pt-2 border-top border-light">
                           {piatto.tags.tradizionale && (
                             <span className="badge bg-light text-muted border px-2 py-1 small rounded-pill">
                               Tradizionale 🇮🇹
                             </span>
                           )}
                           {piatto.tags.senzaGlutine && (
                             <span className={`badge px-2 py-1 small rounded-pill ${styles.badgeSenzaGlutine}`}>
                               Senza Glutine 🌾
                             </span>
                           )}
                           {piatto.tags.vegano && (
                             <span className={`badge px-2 py-1 small rounded-pill ${styles.badgeVegano}`}>
                               Vegano 🌱
                             </span>
                           )}
                         </div>
                       </div>
                     </div>
                   ))}
                   {piattiFiltrati.length === 0 && (
                     <div className="col-12 text-center py-5">
                       <p className="text-muted">Nessun piatto trovato con i filtri selezionati.</p>
                     </div>
                   )}
                </div>       
            </div>
        </section>      
    )
}