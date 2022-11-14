const ADD_POST = "ADD-POST";
const UDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
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
