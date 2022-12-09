import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router/NavigatorRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};
export default App;
