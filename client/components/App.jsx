import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useCacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { getUser, getUserById } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import user, { clearLoggedInUser, updateLoggedInUser } from '../slices/user'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import DashBoard from './view/DashBoard'
import NewCorrespondence from './view/NewCorrespondence'
import Contacts from './view/Contacts'
import Draft from './view/Draft'
import Recieved from './view/Recieved'
import Archive from './view/Archive'
import Landing from './view/Landing/Landing'
import Register from './view/Register/Register'
import UserRoutes from '../UserRoutes'
import NavTwo from './view/NavTwo'

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
          if (userInDb) {
            dispatch(updateLoggedInUser(userInDb))
            navigate(`/correspondence/${userInDb.username}/dashboard`)
          } else {
            navigate('/register')
          }
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  const isLoggedIn = () => (isAuthenticated) ? <NavTwo /> : <></>

  return (
    <>

      {isLoggedIn()}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/correspondence/:username/dashboard"
          element={<DashBoard />}
        />
        <Route
          path="/correspondence/:username/NewCorrespondence"
          element={<NewCorrespondence />}
        />
        <Route
          path="/correspondence/:username/recieved"
          element={<Recieved />}
        />
        <Route
          path="/correspondence/:username/contacts"
          element={<Contacts />}
        />
        <Route path="/correspondence/:username/draft" element={<Draft />} />
        <Route path="/correspondence/:username/archive" element={<Archive />} />
      </Routes>
    </>
  )
}

export default App
