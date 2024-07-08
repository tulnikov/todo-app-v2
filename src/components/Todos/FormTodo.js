import {useState} from 'react'

const FormTodo = ({formTodo}) => {

    const [todo, setTodo] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.trim()) {
            formTodo(todo)
        }

        setTodo('')
    }

    const onChangeHandler = (event) => {
        setTodo(event.target.value)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input placeholder='Enter todo' value={todo} onChange={onChangeHandler}/>
            <button type='submit'>Submit</button>
        </form>
    )
}
export default FormTodo;