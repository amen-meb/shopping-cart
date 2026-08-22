import { useState } from 'react'
import './App.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <>
      <Navbar />

      <div>
        <h1>My Shopping Cart</h1>
        <p>Welcome to my store</p>
      </div>

      <Footer />

    </>
  )
}

export default App
