import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TodoListContext } from "../context/TodoListContext";

const Todo = ({ todos }) => {
  const { removeTodo, findEdit } = useContext(TodoListContext);

  const handleDelete = () => {
    removeTodo(todos.id);
  };

  const handleEdit = () => {
    findEdit(todos.id);
  };

  return (
    <div>
      <li className="list-item">
        <span>{todos.name}</span>
        <div className="btns">
          <button onClick={handleDelete} className="delete-btn todo-btn">
            <AiFillDelete />
          </button>
          <button onClick={handleEdit} className="edit-btn todo-btn">
            <AiFillEdit />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
