import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Brand from './Components/Brand/Brand.jsx'
import Community from './Components/Community/Community.jsx'
import Pixelgrade from './Components/Pixelgrade/Pixelgrade.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <Brand></Brand>
    <Community></Community>
    <Pixelgrade></Pixelgrade>
  </React.StrictMode>,
)
