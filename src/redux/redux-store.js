import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

global.store = store;

export default store;
