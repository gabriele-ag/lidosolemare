import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import GuestLayout from "./layouts/GuestLayout"
import Contatti from "./pages/Contatti"
import Ristorante from "./pages/Ristorante"
import PrenotaOra from "./pages/PrenotaOra"

function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>               
            <Route path="/" element={<Home />} />
            <Route path="/ristorante" element={<Ristorante />} />
            <Route path="/prenotaora" element={<PrenotaOra />} />
            <Route path="/contatti" element={<Contatti />} />
          </Route>       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
