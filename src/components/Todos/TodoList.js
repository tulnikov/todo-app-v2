import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
    <div>
        {!todos.length && <h2>Ваш список дел - пуст!</h2>}
        {todos.map((todo, index) => (
            <Todo todo={todo} key={index} />
        ))}

    </div>
    )
}
export default TodoList;