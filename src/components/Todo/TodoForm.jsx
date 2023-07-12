import styles from './TodoForm.module.scss'
import React,{useState} from 'react';

export function TodoForm({onSetIsShow,submitText,oldTake}) {

    const [taks,setTaks] = useState(oldTake||'')
    const [iserror,setIsError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        //validate
        if(taks.trim() === ''){
            setIsError(true)
            return;
        }


        onSetIsShow()//จากที่ส่งมาจาก Addtodo__handleClickToAddTask && totoitem__handleOpenEdit

    }

    const handleClickcancel = () =>{
        // console.log(e)
        onSetIsShow()
    }

    const handleChange=(e)=>{
        setIsError(false)
        setTaks(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} className={styles.todo__form__container}>
            <input className={styles.todo__form__input} placeholder='Task Name' value={taks} onChange={handleChange}/>
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
