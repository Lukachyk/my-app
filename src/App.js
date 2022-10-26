import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wraper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default App;
