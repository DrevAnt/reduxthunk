import { ActionTypes } from "../../../main/const/action-types";

const initialState = {
  todosList: [],
  loading: true,
  error: false,
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TODOS:
      return { ...state, todosList: payload, error: false, loading: false };
    case ActionTypes.TOGGLE_TODO:
      return { ...state, todosList: payload, error: false, loading: false };
    case ActionTypes.ERROR_TODOS:
      return { ...state, todosList: [], error: true, loading: false };

    default:
      return state;
  }
};
