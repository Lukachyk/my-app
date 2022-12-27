import profileReducer, { addPostActionCreator } from "./profile-reduce";
import React from "react";

let state = {
  postData: [
    { id: 1, message: "Hi, how are you", like: 3 },
    { id: 2, message: "It's my first post", like: 5 },
  ],
};
test("length of postData should be incremented", () => {
  // 1.test data
  let action = addPostActionCreator("my first test!");

  // 2. action
  let newState = profileReducer(state, action);

  //3 . expectation

  expect(newState.postData.length === 3).toBe(3);
});
test("length of postData should be correct", () => {
  // 1.test data
  let action = addPostActionCreator("my first test!");

  // 2. action
  let newState = profileReducer(state, action);

  //3 . expectation

  expect(newState.postData.message).toBe("my first test!");
});
