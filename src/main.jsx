import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
  </React.StrictMode>,
)
