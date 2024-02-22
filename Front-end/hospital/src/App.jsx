import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home/Home"
import View from "./Components/View/View"
import Create from "./Components/Create/Create"
import NavBar from './Components/Navigation'
import Edit from "./Components/Edit/Edit"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/details" element={<View />} />
          <Route path="/patient/create" element={<Create />} />
          <Route path="/patient/edit/:id" element={<Edit/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App