import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user_icon.png";
import styles from "./users.module.css";

let User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photo.small : userPhoto}
              alt="ava_users"
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>
            {"user.location.country"}
            {"user.location.city"}
          </div>
        </span>
      </span>
    </div>
  );
};
export default User;
