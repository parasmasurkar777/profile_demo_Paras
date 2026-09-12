import { useState } from "react";
//import "./App.css";

function Practce() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {

    if (todo.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false
    };

    setTodos([...todos, newTodo]);

    setTodo("");
  };


  // Complete Todo
  const completeTodo = (id) => {

    const updatedTodos = todos.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }

      return item;
    });

    setTodos(updatedTodos);
  };


  // Delete Todo
  const deleteTodo = (id) => {

    const updatedTodos = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos(updatedTodos);
  };


  return (
    <div className="container">

      <h1>My Todo App</h1>

      <div className="input-box">

        <input
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={addTodo}>
          Add
        </button>

      </div>


      <div className="todo-list">

        {todos.map((item) => (

          <div className="todo-item" key={item.id}>

            <span
              onClick={() => completeTodo(item.id)}
              className={item.completed ? "completed" : ""}
            >
              {item.text}
            </span>

            <button
              onClick={() => deleteTodo(item.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Practce;