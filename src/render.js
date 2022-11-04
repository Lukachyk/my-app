import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPost,
  addDialog,
  updateNewPostText,
  updateNewDialogText,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addDialog={addDialog}
        updateNewPostText={updateNewPostText}
        updateNewDialogText={updateNewDialogText}
      />
    </React.StrictMode>
  );
};
