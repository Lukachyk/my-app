import {
  addDialogActionCreator,
  updateNewDialogText,
} from "../../redux/dialogs-reduce";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    newDialogText: state.dialogsPage.newDialogText,
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewDialogText: (text) => {
      let action = updateNewDialogText(text);
      dispatch(action);
    },
    addDialog: () => {
      dispatch(addDialogActionCreator());
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
