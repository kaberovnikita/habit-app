import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LeftMenu from './widgets/LeftMenu/LeftMenu.tsx'
import SportPage from './pages/SportPage/SportPage.tsx'
import FoodPage from './pages/FoodPage/FoodPage.tsx'
import BottlePage from './pages/BottlePage/BottlePage.tsx'
import StartPage from './pages/StartPage/StartPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LeftMenu />,
    children: [
      {
        path: '/sport',
        element: <SportPage />
      },
      {
        path: '/bottle',
        element: <BottlePage />
      },
      {
        path: '/food',
        element: <FoodPage />
      },
      {
        index: true,
        element: <StartPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
