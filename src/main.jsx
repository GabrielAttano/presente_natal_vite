import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { persistor, store } from './app/store'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/header'
import MyRoutes from './routes'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Router>
            <GlobalStyles />
            <Header />
            <MyRoutes />
            <ToastContainer 
              position='top-right'
              autoClose={3000}
              closeOnClick
              draggable
              pauseOnHover
            />
          </Router>

        </PersistGate>
      </Provider>
)
