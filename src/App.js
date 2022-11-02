import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  // let postData = [
  //   { id: 1, message: "Hi, how are you", like: 3 },
  //   { id: 2, message: "It's my first post", like: 5 },
  // ];
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Sidebar />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} /> */}
            <Route
              path="/profile"
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path="/dialogs*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
