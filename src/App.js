import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderMain from './Container/HeaderMain';
import FooterMain from './Container/FooterMain';
import Home from './Container/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HeaderMain />} >
          <Route exact path='/' element={<FooterMain />} >
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App