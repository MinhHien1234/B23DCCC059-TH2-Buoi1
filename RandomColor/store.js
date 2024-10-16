import { createStore } from '@reduxjs/toolkit';


const initialState = {
  color: '#ffffff',
  history: [],
  autoChange: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
        history: [...state.history, action.payload],
      };
    case 'UNDO_COLOR':
      const newHistory = state.history.slice(0, -1);
      return {
        ...state,
        color: newHistory[newHistory.length - 1] || '#ffffff',
        history: newHistory,
      };
    case 'TOGGLE_AUTO_CHANGE':
      return {
        ...state,
        autoChange: !state.autoChange,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
