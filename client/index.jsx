import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App'
import { Provider } from 'react-redux'

import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain='pohutukawa-gracie.au.auth0.com'
      clientId='TeH4ohXhC8zEMkbO3x5Eaeis4mX4pIJN'
      redirectUri={window.location.origin}
      audience='https://delayedmessaging/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
