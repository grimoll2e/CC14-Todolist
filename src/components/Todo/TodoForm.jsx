import styles from './TodoForm.module.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { addTodoAPI } from '../../service/todoService';

TodoForm.propTypes = {
    submitText: PropTypes.string.isRequired,
    onSetIsShow: PropTypes.func.isRequired,
    onAddtodo: PropTypes.func,
    todo: PropTypes.oneOfType([
        PropTypes.object,
    ])
}

export function TodoForm({ updateTodo,onSetIsShow, submitText, todo ,setTodos,setFilterList }) {

    const [task, setTask] = useState(todo?.task || '')
    const [iserror, setIsError] = useState(false)

    const createTodo = async (todoObj) => {
        try {

            // let respose = await axios.post('http://localhost:8080/todos', todoObj)
            let respose = await addTodoAPI(todoObj)
            // console.log(respose.status)
            setTodos(current =>([respose.data.todo,...current]))
            setFilterList(current =>([respose.data.todo,...current]))

        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validate
        if (task.trim() === '') {
            setIsError(true)
            return;
        } else {
            if (todo) {
                updateTodo(todo,{task})
                // onEditTodo(todo.id, { task });//ของเก่า
            } else {
                let now = new Date().toISOString().slice(0, 10)
                let todoObj = {
                    task: task,
                    status: false,
                    date: now
                }
                createTodo(todoObj) // ยิง axios
                // onAddtodo(todoObj) // แก้ internal state
            }
        }
        onSetIsShow()//จากที่ส่งมาจาก Addtodo__handleClickToAddTask && totoitem__handleOpenEdit
    }

    const handleClickcancel = () => {
        // console.log(newtask)
        onSetIsShow()
    }

    const handleChange = (e) => {
        setIsError(false)
        setTask(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} className={styles.todo__form__container}>
            <input className={styles.todo__form__input} placeholder='Task Name' value={task} onChange={handleChange} />
            <div className={styles.todo__form__footer}>
                {iserror && <p className={styles.todo__error}> Title is required</p>}
                <div className={styles.todo__form__buttons}>
                    <button type='button' onClick={handleClickcancel}>Cancle</button>
                    <button type='submit'>{submitText}</button>
                </div>

            </div>
        </form>
    )
}
