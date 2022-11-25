import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png",
        fullName: "Dmitry",
        followed: false,
        status: "i'm a boss",
        location: { city: "Kiyv", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png",
        followed: true,
        fullName: "Andrey",
        status: "Cool day",
        location: { city: "New-york", country: "USA" },
      },
      {
        id: 3,
        photoUrl:
          "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png",
        followed: false,
        fullName: "Roman",
        status: "Good day",
        location: { city: "Odesa", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photoUrl}
                alt="avausers"
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>
                {u.location.country}
                {u.location.city}
              </div>
              <div></div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
