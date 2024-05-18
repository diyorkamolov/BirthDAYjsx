import React from 'react'
import "./index.css"
import Birthday from './page/Birthday'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Generate from './page/Generate'
import RouteBirthday from './page/RouteBirthday'

function App() {
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Birthday/>} />
                <Route path='/birthday/:name?/:day?/:month?' element={<RouteBirthday/>} />
                <Route path="/generate" element={<Generate/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
