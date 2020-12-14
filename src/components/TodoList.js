import React, { useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoListContext);

  if (todos.length) {
    return (
      <div className="list">
        <ul>
          {todos.map((todo) => {
            return <Todo key={todo.id} todos={todo} />;
          })}
        </ul>
      </div>
    );
  } else {
    return <div className="no-todos">There aren't items in your list</div>;
  }
};

export default TodoList;
