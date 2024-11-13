import Header from './components/Header/Header'
import MainPage from './Pages/MainPage'
import Discover from './Pages/Discover'
import Creators from './Pages/Creators'
import Sell from './Pages/Sell'
import Start from './Pages/Start'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom";

// import { useState } from 'react'


export default function App() {
  // const [tab, setTab] = useState('main')


  return (
    <>
      <Header />

      <main>
        <Routes>
          < Route path="/" element={<MainPage />} />
          < Route path="/discover" element={<Discover />} />
          < Route path="/creators" element={<Creators />} />
          < Route path="/sell" element={<Sell />} />
          < Route path="/start" element={<Start />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}