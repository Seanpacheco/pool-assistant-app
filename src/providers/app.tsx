import React, { useState } from 'react';
import './App.css';
import { AppRoutes } from './routes';
import '@tremor/react/dist/esm/tremor.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0ProviderWithNavigate } from './Auth0ProviderWithNavigate';

const router = createBrowserRouter(AppRoutes);

function AppProvider = ({children: }) => {

  return (
    <Auth0ProviderWithNavigate>
      <RouterProvider router={router} />
    </Auth0ProviderWithNavigate>
  );
}

export default AppProvider;