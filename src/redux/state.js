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
    if (action.type === ADD_POST) {
      let newPostData = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      debugger;
      this._state.profilePage.postData.push(newPostData);
      this._state.profilePage.newPostText = " ";
      this._callSubcriber(this._state);
    } else if (action.type === ADD_DIALOG) {
      let newDialogText = {
        id: 6,
        message: this._state.dialogsPage.newDialogText,
      };

      this._state.dialogsPage.messagesData.push(newDialogText);
      this._state.dialogsPage.newDialogText = " ";
      this._callSubcriber(this._state);
    } else if (action.type === UDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubcriber(this._state);
    } else if (action.type === UPDATE_NEW_DEALOG_TEXT) {
      this._state.dialogsPage.newDialogText = action.newText;
      this._callSubcriber(this._state);
    }
  },
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const updateNewPostTextActionCreator = (text) => ({
  type: UDATE_NEW_POST_TEXT,
  newText: text,
});
export const updateNewDialogText = (text) => ({
  type: UPDATE_NEW_DEALOG_TEXT,
  newText: text,
});

window.state = store;

export default store;
