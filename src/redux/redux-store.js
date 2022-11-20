import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogs-reduce";
import profileReducer from "./profile-reduce";
import sidebarReducer from "./sidebar-reduce";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = legacy_createStore(reducers);

export default store;
