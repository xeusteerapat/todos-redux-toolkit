import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../features/todoSlice";

const TodoList = () => {
  const [inputValue, setInputvalue] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        task: inputValue
      })
    );

    setInputvalue("");
  };

  const toggleTodo = (id) => {
    dispatch(toggleComplete({ id }));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div>
      <h1>TODO</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmitTodo}>Add</button>
      {!todos.length
        ? null
        : todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.task}{" "}
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              <button onClick={() => toggleTodo(todo.id)}>Complete</button>
            </li>
          ))}
    </div>
  );
};

export default TodoList;
