import { useState } from 'react';
import Form from './components/Form';
import Item from './components/Item';
import './App.css';

let contId = 1;

function App() {
  const [todos, setTodos] = useState([
    {
      text: contId + " - "  + "Tarea X",
      id: contId,
    },
  ]);

  const addTodo = (task) => {
    contId++;
    const newTodos = [...todos, { text: contId + " - " + task, id: contId}];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    todos.splice( todos.findIndex( todo => todo.id === id ), 1 );
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form addTodo={ addTodo }/>
      <div className="todo-list">
        {todos.map((todo) => (
          <Item todo={todo} removeTodo={ removeTodo }/>
        ))}
      </div>
    </div>
  );
}

export default App;
