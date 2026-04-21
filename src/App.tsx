import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Ecoacciones from './pages/Ecoacciones'
import Menu from './pages/Menu'
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
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ecoacciones" element={<Ecoacciones />}></Route>
          <Route path="/our" element={<Our />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
