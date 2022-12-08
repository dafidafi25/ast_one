import AppBar from "@/components/atom/AppBar";
import Spacer from "@/components/atom/Spacer";
import Dashboard from "@/pages/Dashboard";
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
  {
    path: "/Dashboard",
    element: (
      <>
        <Spacer height={20} />
        <AppBar />
        <Dashboard />
      </>
    ),
  },
]);

export default router;
