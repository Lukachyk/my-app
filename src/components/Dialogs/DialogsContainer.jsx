import {
  addDialogActionCreator,
  updateNewDialogText,
} from "../../redux/dialogs-reduce";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

// // const DialogsContainer = () => {
// //   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addDialog = () => {
//           store.dispatch(addDialogActionCreator());
//         };
//         let onDialogChange = (text) => {
//           let action = updateNewDialogText(text);
//           store.dispatch(action);
//         };
//         return (
//           <Dialogs
//             addDialog={addDialog}
//             updateNewDialogText={onDialogChange}
//             newDialogText={state.dialogsPage.newDialogText}
//             dialogsData={state.dialogsPage.dialogsData}
//             messagesData={state.dialogsPage.messagesData}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
let mapStateToProps = (state) => {
  return {
    newDialogText: state.dialogsPage.newDialogText,
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
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
