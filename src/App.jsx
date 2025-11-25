import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"


function App() {


  return (
    <div className="min-h-screen flex flex-col">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
