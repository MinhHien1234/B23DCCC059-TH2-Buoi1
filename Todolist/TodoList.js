import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const isEdit = useSelector((state) => state.isEdit);
  const dispatch = useDispatch();

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const deleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  const editTodo = (index, text) => {
    dispatch({ type: 'EDIT_TODO', payload: { index, text } });
  };

  const setIsEdit = (isEdit) => {
    dispatch({ type: 'SET_IS_EDIT', payload: isEdit });
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          editTodo={editTodo}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
