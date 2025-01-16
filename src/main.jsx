import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css';
import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
]);

const theme = createTheme({
  autoContrast: true,
  fontFamily: "poppins",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <RouterProvider router={router}/>
    </MantineProvider>
  </StrictMode>,
)
