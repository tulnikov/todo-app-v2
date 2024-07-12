import './App.css';
import {useState} from "react";

import TodoList from './components/Todos/TodoList';
import FormTodo from './components/Todos/FormTodo';

function App() {
    const [todos, setTodos] = useState([]);

    const formTodoHandler = (text) => {
        setTodos([text, ...todos])
    }

    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((todo, idx) => idx !== index))
    }

    return (
        <div className="App">
            <h1>Todo App v1</h1>
            <FormTodo formTodo={formTodoHandler}/>
            <TodoList todos={todos} deleteTodo = {deleteTodoHandler}/>
        </div>
    );
}

export default App;
