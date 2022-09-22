import React from "react";
import { Routes, Route } from 'react-router-dom'

import NavTwo from './view/NavTwo'
import Contacts from './view/Contacts'
import Corresponde from './view/Corresponde'
import Draft from './view/Draft'
import Recieved from './view/Recieved'
import Archive from './view/Archive'
import DashBoard from "./view/DashBoard";

function Dashboard() {
  console.log('home component working...');
  return (
    <>
    <NavTwo />
    <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path="/corresponde" element={<Corresponde />} />
        <Route path="/recieved" element={<Recieved />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/archive" element={<Archive />} />
    </Routes>
    </>
  )
}

export default Dashboard