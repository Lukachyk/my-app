import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { withRouter } from "./components/Profile/ProfileContainer";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reduce";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Sidebar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/dialogs/" element={<DialogsContainer />} />
              <Route path="/users/" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapsStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapsStateToProps, { initializeApp })
)(App);
