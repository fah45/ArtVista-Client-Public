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
import Update from './components/Update.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://art-craft-server-rho.vercel.app/craft')
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
        element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
      },
      {
        path: "all-craft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch('https://art-craft-server-rho.vercel.app/craft')
      },
      {
        path: "my-craft/:id",
        element: <PrivateRoutes>
          <MyCraft></MyCraft>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://art-craft-server-rho.vercel.app/my-craft/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes>
          <Update></Update>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://art-craft-server-rho.vercel.app/craft/${params.id}`)
      },
      {
        path: "/craft",
        element: <CraftCard></CraftCard>,
      },
      {
        path: "/craft/:id",
        element: <PrivateRoutes>
          <CardDetails></CardDetails>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://art-craft-server-rho.vercel.app/craft/${params.id}`)
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
