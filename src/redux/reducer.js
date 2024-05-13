import { getMaxId } from '../utils/maxId';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FILTER_TODOS,
} from './actionTypes';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Mock Todo 1',
      description: 'Description for mock todo 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Mock Todo 2',
      description: 'Description for mock todo 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Mock Todo 3',
      description: 'Description for mock todo 3',
      completed: false,
    },
  ],
  filter: 'ALL',
  searchTerm: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (state.todos.length === 0) {
        return {
          todos: [
            {
              id: 1,
              title: action.payload.title,
              description: action.payload.description,
              completed: false,
            },
            ...state.todos,
          ],
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
      } else {
        const id = getMaxId(state.todos);
        return {
          todos: [
            {
              id: id + 1,
              title: action.payload.title,
              description: action.payload.description,
              completed: false,
            },
            ...state.todos,
          ],
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
      }

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
