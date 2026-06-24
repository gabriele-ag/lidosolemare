import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import GuestLayout from "./layouts/GuestLayout"

function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>               
            <Route path="/" element={<Home />} />
            </Route>       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



{/* <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />                    
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/listaia" element={<ListaIA />} />
            <Route path="/listaia/:id" element={<DettagliIA/>}/>
            <Route path="/preferiti" element={<Preferiti/>}/>
            <Route path="/aggiungiia" element={<AggiungiIA/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider> */}
