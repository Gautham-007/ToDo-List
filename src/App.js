import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store all todos
  const [toDos, setTodos] = useState([]);
  // State to store the input value
  const [toDo, setTodo] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (toDo.trim() !== '') { // Prevent adding empty todos
      setTodos([...toDos, { text: toDo, completed: false }]);
      setTodo(''); // Clear input after adding
    }
  };

  // Function to toggle completion of a todo
  const toggleComplete = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    setTodos(toDos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      
      <div className="input">
        <input 
          value={toDo} 
          onChange={(e) => setTodo(e.target.value)} 
          type="text" 
          placeholder="🖊️ Add item..." 
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((task, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleComplete(index)}
              />
              <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </p>
            </div>
            <div className="right">
              <i onClick={() => deleteTodo(index)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
