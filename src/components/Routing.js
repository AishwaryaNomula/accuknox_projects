import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddWidget from './AddWidget'

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addwidget" element={<AddWidget />} />
        </Routes>
    </div>
  )
}

export default Routing