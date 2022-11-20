import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Sidebar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile
                  dispatch={props.dispatch}
                  profilePage={props.state.profilePage}
                  newPostText={props.state.profilePage.newPostText}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dispatch={props.dispatch}
                  dialogsPage={props.state.dialogsPage}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
