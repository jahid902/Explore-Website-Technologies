import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Components/Home';
import TechDetail from './Components/TechDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/tech/:id',
        element: <TechDetail></TechDetail>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
