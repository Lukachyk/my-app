import "./App.css";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Sidebar from "./components/Sidebar.jsx";

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
