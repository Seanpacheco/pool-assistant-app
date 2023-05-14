import * as React from 'react';
import { AuthenticationGuard } from '../components/Elements/AuthenticationGuard';
import { MainLayout, DashboardLayout, RootLayout, CallbackLayout } from '../components/Layout';
// import { useAuth } from "@/lib/auth";

// import { protectedRoutes } from "./protected";
// import { publicRoutes } from "./public";

export const AppRoutes =
  // const auth = useAuth();
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <MainLayout /> },
        { path: 'callback', element: <CallbackLayout /> },
        { path: 'dashboard', element: <AuthenticationGuard component={DashboardLayout} /> },
      ],
    },
  ];

// const routes = auth.user ? protectedRoutes : publicRoutes;

// const element = useRoutes([...routes...commonRoutes]);
