import React from 'react'
import { Routes, Route } from 'react-router-dom'

import DashBoard from './components/view/DashBoard'
import NewCorrespondence from './components/view/NewCorrespondence'
import Contacts from './components/view/Contacts'
import Draft from './components/view/Draft'
import Recieved from './components/view/Recieved'
import Archive from './components/view/Archive'
import Landing from './components/view/Landing/Landing'
import Register from './components/Register'

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/NewCorrespondence" element={<NewCorrespondence />} />
      <Route path="/recieved" element={<Recieved />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/draft" element={<Draft />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  )
}

export default UserRoutes
