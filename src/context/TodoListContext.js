import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoListContext = createContext();

function TodoListContextProvider(props) {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);

  //to save the data locally when the page refreshes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos([...todos, { name: title, id: uuidv4() }]);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const removeAll = () => {
    setTodos([]);
  };

  // I need a new state to store the edited item
  const [editItem, setEditItem] = useState(null);

  const findEdit = (id) => {
    const todo = todos.find((item) => {
      return item.id === id;
    });
    setEditItem(todo);
  };

  const editTodo = (name, id) => {
    const newTodo = todos.map((item) => {
      if (item.id === id) {
        return { name, id };
      } else {
        return item;
      }
    });
    setTodos(newTodo);
    setEditItem(null);
  };

  return (
    <div>
      <TodoListContext.Provider
        value={{
          todos,
          addTodo,
          removeTodo,
          removeAll,
          editItem,
          findEdit,
          editTodo,
        }}
      >
        {/* refers to all the children components  */}
        {props.children}
      </TodoListContext.Provider>
    </div>
  );
}

export default TodoListContextProvider;
//  37:11
