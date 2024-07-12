import {RiSendPlane2Line} from "react-icons/ri";
import styles from './Todo.module.css';

const Todo = ({todo, index, deleteTodo}) => {


    return (
        <div onDoubleClick={() => deleteTodo(index)} className={styles.todoItem}>
            <RiSendPlane2Line className={styles.todoArrow}/>
            {todo}
        </div>)
}

export default Todo