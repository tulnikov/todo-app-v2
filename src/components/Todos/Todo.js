import {RiSendPlane2Line} from "react-icons/ri";
import styles from './Todo.module.css';

const Todo = ({todo, deleteTodo}) => {


    return (
        <div onDoubleClick={() => deleteTodo(todo.id)} className={styles.todoItem}>
            <RiSendPlane2Line className={styles.todoArrow}/>
            {todo.text}
        </div>)
}

export default Todo