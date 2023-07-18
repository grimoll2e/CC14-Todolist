import styles from './TodoItem.module.scss'
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";
import { TodoForm } from './TodoForm';
import {getFormattedDate} from '../../utils/DateUtils'
// import axios from 'axios';
import { updateTodoAPI,deleteTodoAPI } from '../../service/todoService';


export function TodoItem({todo,onEditTodo,onDelete}) {
    //isCheck = status Done
    // const [isCheck, setIsCheck] = useState(todo.status)
    const [isEdit,setIsEdit] = useState(false)


    const updateTodo = async (oldTodo,updateObj) => {
        // setIsCheck(!isCheck)
        // console.log('state' ,!isCheck)
        // console.log('state' ,todo.status)

        try{
            let todoRequestObj = {...oldTodo,...updateObj}
            // let response = await axios.put(`http://localhost:8080/todos/${oldTodo.id}`,todoRequestObj)
            let response = await updateTodoAPI(oldTodo.id,todoRequestObj) 
            // console.log(response.status)
            let updatedTodo = response.data.todo
            onEditTodo(updatedTodo.id,updatedTodo)
        }catch(err){
            console.log(err.response.status)
        }
        
        
        // onEditTodo(todo.id,{status:!todo.status})
    }

    const handleDeleteTodo = async(todoId) =>{
        try{
            // let response = await axios.delete(`http://localhost:8080/todos/${todoId}`)
            let response =await deleteTodoAPI(todoId)
            console.log(response.status)
            onDelete(todoId)
        } catch(err){
            console.log(err.response.status)
        }


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
            <div className={styles.checkbox__container} onClick={()=>updateTodo(todo,{status:!todo.status})}>
                <HiCheck className={CheckStyles} />
            </div>
            <p className={taskStyle}>{todo.task}</p>
            <span className={styles.date__text}>{getFormattedDate(todo.date)}</span>
            <div className={styles.edit__icon} onClick={handleOpenEdit}>
                <HiPencil />
            </div>
            <div className={styles.delete__icon} onClick={()=>handleDeleteTodo(todo.id)}>
                <HiTrash />
            </div>
        </li>:
        <TodoForm 
        submitText='Edit Take' 
        onSetIsShow={handleOpenEdit}
        updateTodo={updateTodo}
        todo={todo}
        />}
        </>
    )
}
