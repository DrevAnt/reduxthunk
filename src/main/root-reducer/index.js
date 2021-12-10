import { combineReducers } from "redux";
import { todosReducer } from "../../modules/Todos/reducers/todoReducer";
import { postsReducer } from "../../modules/Posts/reducers/postsReducer";
import { usersReducer } from "../../modules/Users/reducers/usersReducer";

const reducers = combineReducers({
  getTodos: todosReducer,
  getUsers: usersReducer,
  getPosts: postsReducer,
});

export default reducers;
