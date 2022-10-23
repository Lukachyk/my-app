import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const App = () => {
  return (
    <div className="app-wraper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
};

export default App;
