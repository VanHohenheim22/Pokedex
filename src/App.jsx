import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Pokedex from './pages/Pokedex';
import IdPoke from './pages/IdPoke';

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />}/>

      <Route element={<Protected />}>

        <Route path='/pokedex' element = {<Pokedex />}/>
        <Route path='/pokedex/:id' element = {<IdPoke />} />

      </Route>

      </Routes>
    </div>
  )
}

export default App
