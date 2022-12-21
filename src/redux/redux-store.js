import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reduce";
import dialogsReducer from "./dialogs-reduce";
import profileReducer from "./profile-reduce";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reduce";
import authReducer from "./auth-reduce";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

global.store = store;

export default store;
