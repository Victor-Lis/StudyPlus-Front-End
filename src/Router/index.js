import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from '../Layout/Navbar';

import Home from '../Components/Home';
import Tasks from '../Components/Tasks';
import Analysis from '../Components/Analysis'

export default function Router() {
  return (
    <BrowserRouter>

      <Navbar/>
    
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/analysis' element={<Analysis/>}/>

      </Routes>

    </BrowserRouter>
  )
}
