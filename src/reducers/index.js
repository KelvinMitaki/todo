import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({ todo: todoReducer });

export default persistReducer(persistConfig, reducers);
