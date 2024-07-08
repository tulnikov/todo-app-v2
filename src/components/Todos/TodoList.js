import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
    <div>
        {todos.map((todo, index) => (
            <Todo todo={todo} key={index} />
        ))}

    </div>
    )
}
export default TodoList;