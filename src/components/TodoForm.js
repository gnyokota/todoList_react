import React, { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../context/TodoListContext";

const TodoForm = () => {
  const { addTodo, removeAll, editItem, editTodo } = useContext(
    TodoListContext
  );
  const [name, setName] = useState("");

  //  It grabs the value from input field
  const handleChange = (event) => {
    setName(event.target.value);
  };

  //   to prevent the reload the page and set the title according to the name grabbed
  //   using handleChange
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editItem === null) {
      addTodo(name);
      // to clean the input text field
      setName("");
    } else {
      editTodo(name, editItem.id);
    }
  };

  // rerender the component when a data is updated
  //useEffect will only run when the editItem is updated
  useEffect(() => {
    if (editItem !== null) {
      setName(editItem.name);
    } else {
      setName("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        onChange={handleChange}
        type="text"
        value={name}
        placeholder="what are you planing?"
        required
      />
      {/* The button type should be submit since the handleSubmit is adding the todo*/}
      <button type="submit" className="add-btn form-btn">
        {editItem === null ? "Add Item" : "Edit Item"}
      </button>
      <button onClick={removeAll} className="clean-btn form-btn">
        Clean
      </button>
    </form>
  );
};

export default TodoForm;
