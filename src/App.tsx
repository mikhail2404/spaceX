import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ShipmentDetails from './components/ShipmentsDetails/ShipmentDetails'
import Layout from './layout/Layout'

import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h1>Select Shipment</h1>} />
        <Route path="/:id" element={<ShipmentDetails />} />
      </Route>
    </Routes>
  )
}

export default App
