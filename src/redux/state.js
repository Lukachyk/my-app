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
  getState() {
    return this._state;
  },
  _callSubcriber() {
    console.log("State  changed");
  },
  addPost() {
    debugger;
    let newPostData = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    };
    this._state.profilePage.postData.push(newPostData);
    this._state.profilePage.newPostText = " ";
    this._callSubcriber(this._state);
  },
  addDialog() {
    let newDialogText = {
      id: 6,
      message: this._state.dialogsPage.newDialogText,
    };
    this._state.dialogsPage.messagesData.push(newDialogText);
    this._state.dialogsPage.newDialogText = " ";
    this._callSubcriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubcriber(this._state);
  },
  updateNewDialogText(newText) {
    this._state.dialogsPage.newDialogText = newText;
    this._callSubcriber(this._state);
  },
  subscribe(observer) {
    this._callSubcriber = observer; // это паттерн observeк (наблюдатель) rerender функция которая написана в index.js
  },
};

window.state = store;

export default store;
