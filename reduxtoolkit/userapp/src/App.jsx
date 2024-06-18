import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import UserDetails from './Components/UserDetails'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <UserDetails/>
        </div>
    </>
  )
}

export default App
