import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router/NavigatorRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};
export default App;
