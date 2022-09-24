import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useCacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { getUser } from '../api'
import Register from './Register'
import { useDispatch } from 'react-redux'
import { clearLoggedInUser, updateLoggedInUser } from '../slices/user'

import DashBoard from './view/DashBoard'
import NewCorrespondence from './view/NewCorrespondence'
import Contacts from './view/Contacts'
import Draft from './view/Draft'
import Recieved from './view/Recieved'
import Archive from './view/Archive'
import Landing from './view/Landing/Landing'

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
    <>  
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
    </>
  )
}

export default App
