import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, toggleTodo } from "../../actions";
import Loading from "../../../../library/common/components/Loading";

const TodoList = () => {
  const todos = useSelector((state) => state.getTodos);
  const dispatch = useDispatch();

  const updateTodo = (todo) => {
    dispatch(toggleTodo(todo));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      {todos.loading ? (
        todos.error ? (
          <div>Error in API</div>
        ) : (
          <Loading />
        )
      ) : (
        <div>
          <ul className="list-group">
            {todos?.todosList?.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={
                  todo.completed
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => updateTodo(todo)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
