import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GeneralContext } from './Context/GeneralContext'

import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import Dashboard from './Pages/Dashboard';
import Forum from './Pages/Forum';
import About from './Pages/About';

const RoutesApp = () => {

  const [userCode, setUserCode] = useState()
  const [openAbout, setOpenAbout] = useState(false)
  const [aboutWho, setAboutWho] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"
          element={
            <GeneralContext.Provider value={{
              setUserCode 
            }}>
                <Login />
            </GeneralContext.Provider>
          }
        />
        <Route path="/pagina-inicial"
          element={
            <GeneralContext.Provider value={{
              userCode
            }}>
              <Welcome />
            </GeneralContext.Provider>
          }
        />
        <Route path="/dashboard"
          element={
            <GeneralContext.Provider>
              <Dashboard />
            </GeneralContext.Provider>
          }
        />
        <Route path="/forum"
          element={
            <GeneralContext.Provider>
              <Forum />
            </GeneralContext.Provider>

          }
        />
        <Route path="/sobre"
          element={
            <GeneralContext.Provider value={{
              openAbout, setOpenAbout,
              aboutWho, setAboutWho
            }}>
              <About />
            </GeneralContext.Provider>
          }
        />
        <Route path="*" component={() => <div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
/* <GeneralContext.Provider value={{}}*/
export default RoutesApp;