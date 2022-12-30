import "./App.css";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reduce";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/common/preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import { withRouter } from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

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
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Routes>
                <Route path="/profile" element={<ProfileContainer />}>
                  <Route path=":userId" element={<ProfileContainer />} />
                </Route>
                <Route path="/dialogs/" element={<DialogsContainer />} />
                <Route path="/users/" element={<UsersContainer />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Suspense>
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
