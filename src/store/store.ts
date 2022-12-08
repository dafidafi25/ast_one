import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import AuthReducer from "./features/Auth/Auth";
import ProfileReducer from "./features/Profile/Profile";

const reducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
