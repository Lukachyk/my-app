import {
  addDialogActionCreator,
  updateNewDialogText,
} from "../../redux/dialogs-reduce";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    newDialogText: state.dialogsPage.newDialogText,
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewDialogText: (text) => {
    //   let action = updateNewDialogText(text);
    //   dispatch(action);
    // },
    addDialog: (newDialogText) => {
      dispatch(addDialogActionCreator(newDialogText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
