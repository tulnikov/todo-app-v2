import { RiSendPlane2Line } from "react-icons/ri";
import styles from './Todo.module.css';

const Todo = ({todo}) => {

    const onDoubleClickHandler = (e) => {
        console.log('double clicked');
    }

    return (
        <div onDoubleClick={onDoubleClickHandler} className={styles.todoItem}>
           <RiSendPlane2Line className={styles.todoArrow} />
            {todo}
        </div>)
}

export default Todo