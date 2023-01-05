import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { persistor, store } from './app/store'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/header'
import MyRoutes from './routes'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AmplifyProvider>

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

    </AmplifyProvider>
  </React.StrictMode>,
)
