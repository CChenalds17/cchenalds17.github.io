import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root';
import HomePage from './routes/HomePage';
import MusicPage from './routes/MusicPage';
import ProjectsPage from './routes/ProjectsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/music",
        element: <MusicPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
