const ADD_POST = "ADD-POST";
const UDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you", like: 3 },
    { id: 2, message: "It's my first post", like: 5 },
  ],
  newPostText: "TestTest1",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostData = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };

      return {
        ...state,
        postData: [...state.postData, newPostData],
        newPostText: " ",
      };
    }
    case UDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
