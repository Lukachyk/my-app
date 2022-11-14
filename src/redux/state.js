import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";

const ADD_POST = "ADD-POST";
const ADD_DIALOG = "ADD-DIALOG";
const UDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_DEALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you", like: 3 },
        { id: 2, message: "It's my first post", like: 5 },
      ],

      newPostText: "TestText1",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Bodrey" },
        { id: 3, name: "Sergey" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Igor" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Whats up" },
        { id: 5, message: "Hi" },
      ],
      newDialogText: "TestText2",
    },
    sidebar: {},
  },
  _callSubcriber() {
    console.log("State  changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcriber = observer; // это паттерн observeк (наблюдатель) rerender функция которая написана в index.js
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubcriber(this._state);
  },
};

window.state = store;

export default store;
