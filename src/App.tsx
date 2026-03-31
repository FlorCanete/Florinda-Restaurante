import { Routes, Route } from 'react-router-dom'
import './App.css'
import Ecoacciones from './pages/Ecoacciones'
import Location from './pages/Location'
import Home from './pages/Home'
import Our from './pages/Our'
import { NavBar } from './assets/components/organisms/NavBar'
import { Footer } from './assets/components/Footer'

function App() {

  return (
    <>
      <NavBar />

      <main>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ecoacciones" element={<Ecoacciones />}></Route>
        <Route path="/our" element={<Our />}></Route>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
