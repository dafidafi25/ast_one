import AppBar from "@/components/atom/AppBar";
import Spacer from "@/components/atom/Spacer";
import CommentPost from "@/pages/CommentPost";
import Dashboard from "@/pages/Dashboard";
import DetailPost from "@/pages/DetailPost";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
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
  {
    path: "/profile",
    element: (
      <>
        <Spacer height={20} />
        <AppBar />
        <Profile />
      </>
    ),
  },
  {
    path: "/post/:postId",
    element: (
      <>
        <Spacer height={20} />
        <AppBar />
        <DetailPost />
      </>
    ),
  },
  {
    path: "/post/:postId/comments",
    element: (
      <>
        <Spacer height={20} />
        <AppBar />
        <CommentPost />
      </>
    ),
  },
]);

export default router;
