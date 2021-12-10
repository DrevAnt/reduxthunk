import { ActionTypes } from "../../../main/const/action-types";

const initialState = {
  postsList: [],
  loading: true,
  error: false,
};

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_POSTS:
      return { ...state, postsList: payload, error: false, loading: false };

    case ActionTypes.ADD_POSTS:
      return {
        ...state,
        postsList: payload,
        error: false,
        loading: false,
      };

    case ActionTypes.ERROR_POSTS:
      return { ...state, postsList: [], error: true, loading: false };

    default:
      return state;
  }
};
