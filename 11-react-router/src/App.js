import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Footer, Home, Navbar } from './components'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
