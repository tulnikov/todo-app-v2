import Todo from './Todo';

const TodoList = ({todos, deleteTodo}) => {
    return (
    <div>
        {!todos.length && <h2>Ваш список дел - пуст!</h2>}
        {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}

    </div>
    )
}
export default TodoList;