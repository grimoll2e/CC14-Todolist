import styles from './TodoForm.module.scss'
import React,{useState} from 'react';

export function TodoForm({onSetIsShow}) {

    const [taks,setTaks] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        onSetIsShow()//จากที่ส่งมาจาก Addtodo

    }

    const handleClickcancel = (e) =>{
        // console.log(e)
        onSetIsShow()
    }

    const handleChange=(e)=>{
        setTaks(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} className={styles.todo__form__container}>
            <input className={styles.todo__form__input} placeholder='Task Name' value={taks} onChange={handleChange}/>
            <div className={styles.todo__form__footer}>
                <p className={styles.todo__error}> Title is required</p>
                <div className={styles.todo__form__buttons}>
                    <button type='button' onClick={handleClickcancel}>Cancle</button>
                    <button type='submit'>Add task</button>
                </div>

            </div>
        </form>
    )
}
