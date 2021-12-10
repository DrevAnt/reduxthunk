import { ActionTypes } from "../../../main/const/action-types";
import axios from "axios";

export const getTodos = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
    .then((response) => response.data)
    .then((todos) => {
      dispatch({
        type: ActionTypes.GET_TODOS,
        payload: todos,
      });
    })
    .catch(() => {
      dispatch({
        type: ActionTypes.ERROR_TODOS,
        payload: null,
      });
    });
};

export const toggleTodo = (todo) => (dispatch, getState) => {
  const state = getState();
  const todos = state.getTodos.todosList;

  const items = todos.map((item) => {
    if (item.id === todo.id) {
      todo.completed = !todo.completed;
    }
    return item;
  });

  dispatch({
    type: ActionTypes.TOGGLE_TODO,
    payload: items,
  });
};
