import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoListContextProvider from "./context/TodoListContext";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <TodoListContextProvider>
      <div className="App">
        <h1 className="title">My To-Do List</h1>
        <div className="todo-container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
      <footer>
        <p className="attribution">
          Coded by{" "}
          <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
        </p>
      </footer>
    </TodoListContextProvider>
  );
}

export default App;
