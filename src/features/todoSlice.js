import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: crypto.randomUUID(),
        task: action.payload.task,
        completed: false
      };

      return [...state, newTask];
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;

      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;

      return state.filter((todo) => todo.id !== id);
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
