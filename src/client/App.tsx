import React, { useState } from 'react';
import './App.css';
import { AppRoutes } from './routes';
import '@tremor/react/dist/esm/tremor.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(AppRoutes);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
