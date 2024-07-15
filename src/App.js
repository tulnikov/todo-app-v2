import './App.css';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid'

import TodoList from './components/Todos/TodoList';
import FormTodo from './components/Todos/FormTodo';

function App() {
    const [todos, setTodos] = useState([]);

    const formTodoHandler = (text) => {
        const newTodo = {
            text: text,
            completed: false,
            id: uuidv4()
        }
        setTodos([newTodo, ...todos])
    }

    const deleteTodoHandler = (index) => {
        setTodos(todos.filter(todo => todo.id !== index))
    }

    return (
        <div className="App">
            <h1>Todo App v2</h1>
            <FormTodo formTodo={formTodoHandler}/>
            <TodoList todos={todos} deleteTodo = {deleteTodoHandler}/>
        </div>
    );
}

export default App;
