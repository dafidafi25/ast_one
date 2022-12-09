import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./router/NavigatorRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Spacer from "./components/atom/Spacer";
import AppBar from "./components/atom/AppBar";
import Dashboard from "./pages/Dashboard";
import DetailPost from "./pages/DetailPost";
import CommentPost from "./pages/CommentPost";
import Profile from "./pages/Profile";

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <>
                  <Spacer height={20} />
                  <AppBar />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Spacer height={20} />
                  <AppBar />
                  <Profile />
                </>
              }
            />
            <Route
              path="/post/:postId"
              element={
                <>
                  <Spacer height={20} />
                  <AppBar />
                  <DetailPost />
                </>
              }
            />
            <Route
              path="/post/:postId/comments"
              element={
                <>
                  <Spacer height={20} />
                  <AppBar />
                  <CommentPost />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
