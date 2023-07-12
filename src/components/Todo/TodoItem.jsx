import styles from './TodoItem.module.scss'
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";
import { TodoForm } from './TodoForm';

export function TodoItem({todo,onEditTodo,onDelete}) {
    //isCheck = status Done
    // const [isCheck, setIsCheck] = useState(todo.status)
    const [isEdit,setIsEdit] = useState(false)


    const handleToggleCheck = () => {
        // setIsCheck(!isCheck)
        // console.log('state' ,!isCheck)
        // console.log('state' ,todo.status)
        onEditTodo(todo.id,{status:!todo.status})
    }

    const handleDeleteTodo = () =>{
        onDelete(todo.id)
    }

    const handleOpenEdit = ()=>{
        setIsEdit(!isEdit)
    }

    // class ui checkbox icon render
    let CheckStyles = todo.status ? styles.checkbox_icon__done : styles.checkbox_icon
    let taskStyle = todo.status ? styles.done : ''

    return (
        <>
        {!isEdit ? <li className={styles.todo__item__container} >
            <div className={styles.checkbox__container} onClick={handleToggleCheck}>
                <HiCheck className={CheckStyles} />
            </div>
            <p className={taskStyle}>{todo.task}</p>
            <div className={styles.edit__icon} onClick={handleOpenEdit}>
                <HiPencil />
            </div>
            <div className={styles.delete__icon} onClick={handleDeleteTodo}>
                <HiTrash />
            </div>
        </li>:
        <TodoForm 
        submitText='Edit Take' 
        onSetIsShow={handleOpenEdit}
        onEditTodo={onEditTodo}
        todo={todo}
        />}
        </>
    )
}
