import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import  "./Intex.css"
// import Routing from './Routes/RoutIng.jsx'
import AppRoute from './Routes/AppRoute'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoute />
    {/* <Routing /> */}

  </React.StrictMode>,
)
