import React from 'react'
import ReactDOM from 'react-dom/client'
import { Signin } from './components/Signin.tsx';
import { Home } from './pages/Home.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, {
    path: '/user',
    element: <App/>
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <RouterProvider 
          router={router}
        />
      </React.StrictMode>
)
