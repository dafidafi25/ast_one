import Login from "@/pages/Login";
import Welcome from "@/pages/Welcome";
import { createBrowserRouter } from "react-router-dom";

interface INavigatorRouterProps {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
