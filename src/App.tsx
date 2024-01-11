import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { CertificatesPage } from './pages/Certificates'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/certificados" element={<CertificatesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
