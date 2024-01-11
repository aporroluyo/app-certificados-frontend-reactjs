import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Inicio } from './pages/Inicio';
import { Certificados } from './pages/Certificados';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/certificados' element={<Certificados />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
