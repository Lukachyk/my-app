const ADD_POST = "ADD-POST";
const UDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you", like: 3 },
    { id: 2, message: "It's my first post", like: 5 },
  ],

  newPostText: "TestText1",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostData = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      state.postData.push(newPostData);
      state.newPostText = " ";
      return state;
    case UDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
