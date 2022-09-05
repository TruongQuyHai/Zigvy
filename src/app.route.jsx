import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "./layouts/default/default.layout";

const Home = lazy(() => import("./pages/home/home.page"));

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

function AppRoutes() {
  const appRoutes = useRoutes(routes);
  return appRoutes;
}

export default AppRoutes;
