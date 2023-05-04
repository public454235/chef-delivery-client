import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import CardDetails from './components/CardDetails/CardDetails';
import AuthProvider from './components/Providers/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoutes from './components/Routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>

      },
      {
        path: '/category/:_id',
        element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params._id}`)

      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
