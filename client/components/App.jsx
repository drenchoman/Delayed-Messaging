import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useCacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { getUser } from '../api'
import Register from './Register'
import { useDispatch } from 'react-redux'
import { clearLoggedInUser, updateLoggedInUser } from '../slices/user'
import Tiptap from './Tiptap'

// import Nav from './Nav'
import NavTwo from './view/NavTwo'
import DashBoard from './view/DashBoard'
import Corresponde from './view/Corresponde'
import Contacts from './view/Contacts'
import Draft from './view/Draft'
import Recieved from './view/Recieved'
import Archive from './view/Archive'


function App() {
  useCacheUser()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearLoggedInUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
<<<<<<< HEAD
    <>
      <Nav />
      <Tiptap />
      <Routes>
        <Route path="/" element={<Fruits />} />
=======
    <>    
      {/* <Nav /> */}
      <NavTwo />
      <Routes>    
>>>>>>> c89bdc2af9d138c6d96820625df70c56b6d4ea00
        <Route path="register" element={<Register />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/corresponde" element={<Corresponde />} />
        <Route path="/recieved" element={<Recieved />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </>
  )
}

export default App
