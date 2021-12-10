import { ActionTypes } from "../../../main/const/action-types";

const initialState = {
  usersList: [],
  loading: true,
  error: false,
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return { ...state, usersList: payload, error: false, loading: false };
    case ActionTypes.ERROR_USERS:
      return { ...state, usersList: [], error: true, loading: false };

    default:
      return state;
  }
};
