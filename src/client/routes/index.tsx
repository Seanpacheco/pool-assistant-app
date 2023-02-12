import * as React from"react";
import { useRoutes, Route } from "react-router-dom";

import { MainLayout, DashboardLayout } from "../components/Layout";
// import { useAuth } from "@/lib/auth";

// import { protectedRoutes } from "./protected";
// import { publicRoutes } from "./public";

export const AppRoutes =
  // const auth = useAuth();
  [
    { path: "/", element: <MainLayout /> },
    { path: "dashboard", element: <DashboardLayout /> },
  ];

// const routes = auth.user ? protectedRoutes : publicRoutes;

// const element = useRoutes([...routes...commonRoutes]);
