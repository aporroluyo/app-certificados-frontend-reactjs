import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Inicio } from './pages/Inicio';
import { Certificados } from './pages/Certificados';
import { CertificadosConsumidos } from './pages/Reportes/CertificadosConsumidos';
import { CanjesRealizados } from './pages/Reportes/CanjesRealizados';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/certificados' element={<Certificados />} />
          <Route path='/reportes/certificados' element={<CertificadosConsumidos />} />
          <Route path='/reportes/canjes' element={<CanjesRealizados />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
