import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Helmet } from "react-helmet";
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Helmet>
      <title>Magical ToyLand</title> {/* Set the default website title */}
    </Helmet>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
