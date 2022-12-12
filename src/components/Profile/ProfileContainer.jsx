import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profile-reduce.js";
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
