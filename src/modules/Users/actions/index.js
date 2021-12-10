import { ActionTypes } from "../../../main/const/action-types";
import axios from "axios";

export const getUsers = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .then((users) => {
      dispatch({
        type: ActionTypes.GET_USERS,
        payload: users,
      });
    })
    .catch(() => {
      dispatch({
        type: ActionTypes.ERROR_USERS,
        payload: null,
      });
    });
};
