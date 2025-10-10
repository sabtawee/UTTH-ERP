import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './core/context/AuthContext';
import 'antd/dist/reset.css';
import './index.css';
import './core/locales/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={AppRouter} />
    </AuthProvider>
  </React.StrictMode>
);