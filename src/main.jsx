import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPage.jsx';
import AddCraft from './components/AddCraft.jsx';
import AllCraft from './components/AllCraft.jsx';
import MyCraft from './components/MyCraft.jsx';
import CraftCard from './components/CraftCard.jsx';
import CardDetails from './components/CardDetails.jsx';
import PrivateRoutes from './Provider/PrivateRoutes.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "add-craft",
        element: <AddCraft></AddCraft>
      },
      {
        path: "all-craft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch('http://localhost:5000/craft')
      },
      {
        path: "my-craft",
        element: <PrivateRoutes>
          <MyCraft></MyCraft>
        </PrivateRoutes>
      },
      {
        path: "/craft",
        element: <CraftCard></CraftCard>,
      },
      {
        path: "/craft/:id",
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
