import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Login } from './pages/Login';
import { Inicio } from './pages/Inicio';
import { Certificados } from './pages/Certificados';
import { CertificadosConsumidos } from './pages/Reportes/CertificadosConsumidos';
import { CanjesRealizados } from './pages/Reportes/CanjesRealizados';
import { Cupones } from './pages/Cupones';
import { Campania } from './pages/Campania';
import { MantenimientoProductos } from './pages/Productos/MantenimientoProductos';
import { NuevoProducto } from './pages/Productos/NuevoProducto';
import { CambioContrasenia } from './pages/Seguridad/CambioContrasenia';

import './App.css';
import './index.css'; // for tailwind

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'inicio',
    element: <Inicio />
  },
  {
    path: 'certificados',
    element: <Certificados />
  },
  {
    path: 'reportes',
    children: [
      {
        path: 'certificados',
        element: <CertificadosConsumidos />
      },
      {
        path: 'canjes',
        element: <CanjesRealizados />
      }
    ]
  },
  {
    path: 'cupones',
    element: <Cupones />
  },
  {
    path: 'campania',
    element: <Campania />
  },
  {
    path: 'seguridad',
    children: [
      {
        path: 'contrasenia',
        element: <CambioContrasenia />
      }
    ]
  },
  {
    path: 'productos',
    children: [
      {
        path: 'mantenimiento',
        element: <MantenimientoProductos />

      },
      {
        path: 'nuevo',
        element: <NuevoProducto />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </AuthProvider>
  </React.StrictMode>
);
