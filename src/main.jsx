import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ]
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)