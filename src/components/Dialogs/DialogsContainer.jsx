import React from "react";
import {
  addDialogActionCreator,
  updateNewDialogText,
} from "../../redux/dialogs-reduce";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addDialog = () => {
          store.dispatch(addDialogActionCreator());
        };
        let onDialogChange = (text) => {
          let action = updateNewDialogText(text);
          store.dispatch(action);
        };
        return (
          <Dialogs
            addDialog={addDialog}
            updateNewDialogText={onDialogChange}
            newDialogText={state.dialogsPage.newDialogText}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
