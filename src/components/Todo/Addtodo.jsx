import styles from './Addtodo.module.scss'
import { useState } from 'react'
import { TodoForm } from './TodoForm'

export function Addtodo({setTodos,setFilterList}) {
    const [isShow,setIsShow] = useState(false)

    const handleClickToAddTask = () =>{
        setIsShow(!isShow)
    }
    return (
        <>
            {!isShow?(<div className={styles.add__todo} onClick={handleClickToAddTask}>
                <span>+</span>
                <h3>Add task</h3>
            </div>):(
            <TodoForm 
            onSetIsShow={handleClickToAddTask} 
            submitText='Add task' 
            setTodos={setTodos} 
            setFilterList={setFilterList}
            />
            )}
        </>
    )
}
