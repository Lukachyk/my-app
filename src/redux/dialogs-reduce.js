const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DEALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      let newDialogText = {
        id: 6,
        message: state.newDialogText,
      };
      state.messagesData.push(newDialogText);
      state.newDialogText = " ";
      return state;
    case UPDATE_NEW_DEALOG_TEXT:
      state.newDialogText = action.newText;
      return state;
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
