const ADD_DIALOG = "ADD-DIALOG";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  let newDialogText = {
    id: 6,
    message: action.newDialogText,
  };

  switch (action.type) {
    case ADD_DIALOG:
      return {
        ...state,
        messagesData: [...state.messagesData, newDialogText],
      };
    default:
      return state;
  }
};

export const addDialogActionCreator = (newDialogText) => ({
  type: ADD_DIALOG,
  newDialogText,
});

export default dialogsReducer;
