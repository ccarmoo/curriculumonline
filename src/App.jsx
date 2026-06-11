import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import Portifolio from './Portifolio';
import Contato from './Contato';
import Interesse from './Interesse';

function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter basename="/curriculumonline/">
        <Routes>
          <Route path='/' element={<FormPage />} />
          <Route path='/portifolio' element={<Portifolio />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/interesse' element={<Interesse />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App