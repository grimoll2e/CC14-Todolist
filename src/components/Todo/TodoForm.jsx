import styles from './TodoForm.module.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

TodoForm.propTypes = {
    submitText:PropTypes.string.isRequired,
    onSetIsShow:PropTypes.func.isRequired,
    onAddtodo:PropTypes.func,
    onEditTodo:PropTypes.func,
    todo:PropTypes.oneOfType([
        PropTypes.object,
        undefined,
    ])
}

export function TodoForm({ onSetIsShow, submitText, todo, onAddtodo, onEditTodo }) {

    const [task, setTask] = useState(todo?.task || '')
    const [iserror, setIsError] = useState(false)
    console.log(todo)

    const handleSubmit = (e) => {
        e.preventDefault()

        //validate
        if (task.trim() === '') {
            setIsError(true)
            return;
        } else {
            if (todo) {
                onEditTodo(todo.id, { task });
            } else {
                onAddtodo(task)
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
