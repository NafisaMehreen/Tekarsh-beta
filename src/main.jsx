import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Landing } from './Landing.jsx'
import { SoftDev } from './routes/SoftDev.jsx'
import { Qa } from './routes/Qa.jsx'
import { Dataprocess } from './routes/Dataprocess.jsx'
import { About } from './routes/About.jsx'
import { ClientServices } from './routes/ClientServices.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { Contacts } from './routes/Contacts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/software-development" element={<SoftDev />} />
        <Route path="/quality-assurance" element={<Qa />} />
        <Route path="/data-processing" element={<Dataprocess />} />
        <Route path="/about" element={<About />} />
        <Route path="/client-services" element={<ClientServices />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)