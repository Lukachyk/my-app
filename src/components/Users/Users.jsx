import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user_icon.png";
import styles from "./users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photo.small : userPhoto}
                  alt="ava_users"
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow${u.id}}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": " ",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow${u.id}}`,
                        {},
                        { withCredentials: true ,
                          headers: {"API-KEY": " "},)
                   .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      })
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>
                {"u.location.country"}
                {"u.location.city"}
              </div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
