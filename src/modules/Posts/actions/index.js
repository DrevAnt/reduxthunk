import { ActionTypes } from "../../../main/const/action-types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then((response) => response.data)
    .then((posts) => {
      dispatch({
        type: ActionTypes.GET_POSTS,
        payload: posts,
      });
    })
    .catch(() => {
      dispatch({
        type: ActionTypes.ERROR_POSTS,
        payload: null,
      });
    });
};

export const addPost = (postObject) => (dispatch, getState) => {
  const state = getState();
  const oldPosts = state.getPosts.postsList;

  const futurePost = {
    userId: 1,
    id: uuidv4(),
    ...postObject,
  };
  console.log(postObject);
  console.log(futurePost);

  axios
    .post("https://jsonplaceholder.typicode.com/posts", futurePost)
    .then((response) => response.data)
    .then((post) => {
      console.log(post);
      console.log(oldPosts);
      const newPost = [post, ...oldPosts];
      console.log(newPost);
      dispatch({
        type: ActionTypes.ADD_POST,
        payload: newPost,
      });
    })
    .catch(() => {
      dispatch({
        type: ActionTypes.ERROR_POSTS,
        payload: null,
      });
    });
};
