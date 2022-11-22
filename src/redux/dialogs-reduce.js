const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DEALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";

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
  newDialogText: "TestText2",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG: {
      let newDialogText = {
        id: 6,
        message: state.newDialogText,
      };
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newDialogText);
      stateCopy.newDialogText = " ";
      return stateCopy;
    }
    case UPDATE_NEW_DEALOG_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newDialogText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });

export const updateNewDialogText = (text) => ({
  type: UPDATE_NEW_DEALOG_TEXT,
  newText: text,
});

export default dialogsReducer;
