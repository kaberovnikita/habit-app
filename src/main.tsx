import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LeftMenu from './widgets/LeftMenu/LeftMenu.tsx'
import HabitPage from './pages/HabitPage/HabitPage.tsx'
import './index.css'
import MainPage from './pages/MainPage/MainPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LeftMenu />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/habits/:id",
        element: <HabitPage />,
      },
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
