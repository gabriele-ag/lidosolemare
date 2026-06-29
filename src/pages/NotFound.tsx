import { useNavigate } from 'react-router';
import styles from "./CSS/notfound.module.css"

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className={styles.bgNotFound}>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column vh-100">
                    <div className="d-flex flex-column align-items-center mb-5">
                        <p>404 | Not Found</p>
                        <h1>Sei fuori rotta?</h1>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center gap-3 w-100" style={{ maxWidth: "450px" }}>             
                        <button 
                            onClick={() => navigate('/')} 
                            className={`btn text-white ${styles.btnCustom}`}
                        >
                            Torna alla Home
                        </button>

                        <button 
                            onClick={() => navigate(-1)} 
                            className={`btn ${styles.btnCustom2}`}
                        >
                            Torna alla pagina precedente
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}