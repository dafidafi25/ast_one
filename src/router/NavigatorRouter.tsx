import Welcome from "@/pages/Welcome";
import { createBrowserRouter } from "react-router-dom";

interface INavigatorRouterProps {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
]);

export default router;
