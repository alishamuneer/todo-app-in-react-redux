import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FILTER_TODOS,
} from './actionTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});
