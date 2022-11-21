import React from "react";
import {
  addDialogActionCreator,
  updateNewDialogText,
} from "../../redux/dialogs-reduce";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addDialog = () => {
    props.store.dispatch(addDialogActionCreator());
  };
  let onDialogChange = (text) => {
    let action = updateNewDialogText(text);
    props.store.dispatch(action);
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
};

export default DialogsContainer;
