import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./store";
const TDL = () => {
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch(); 

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      storedTodos.forEach(todo => {
        dispatch({ type: 'ADD_TODO', payload: todo.text }); 
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue }); 
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      addTodo(); // Gọi addTodo khi nhấn Enter
    }
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index }); // Gọi action toggle todo
  };

  const editTodo = (index, value) => {
    dispatch({ type: 'EDIT_TODO', payload: { index, text: value } }); // Gọi action sửa todo
  };

  const deleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index }); // Gọi action xóa todo
  };

  return (
    <div
      style={{
        margin: 24,
        width: 500,
        paddingRight: 22,
        height: 500,
        border: "3px solid #ccc",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nội dung công việc"
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Enter</button>
      </div>
      <TodoList
        editTodo={editTodo}
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
const AppWrapper = () => (
    <Provider store={store}>
      <TDL />
    </Provider>
  );
export default AppWrapper ;


