import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
  let newPostData = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0,
  };
  state.profilePage.postData.push(newPostData);
  state.profilePage.newPostText = " ";
  rerenderEntireTree(state);
};
export let addDialog = () => {
  let newDialogText = {
    id: 6,
    message: state.dialogsPage.newDialogText,
  };
  state.dialogsPage.messagesData.push(newDialogText);
  state.dialogsPage.newDialogText = " ";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let updateNewDialogText = (newText) => {
  state.dialogsPage.newDialogText = newText;
  rerenderEntireTree(state);
};

export default state;
