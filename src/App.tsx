import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import GuestLayout from "./layouts/GuestLayout"
import Contatti from "./pages/Contatti"

function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>               
            <Route path="/" element={<Home />} />
            <Route path="/contatti" element={<Contatti />} />
          </Route>       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
