import { createStore } from 'redux';

const initialState = {
    todos: [
     
    ],
    isEdit: false,
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? { ...todo, text: action.payload.text } : todo
        ),
      };
    case 'SET_IS_EDIT':
      return {
        ...state,
        isEdit: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
