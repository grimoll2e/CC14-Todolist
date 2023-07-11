import styles from './TodoContent.module.scss' //module css
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";

export function TodoContent() {

    const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);
    const now = new Date()
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    console.log(now.toLocaleDateString('en-US', options))
    return (
        <main className="content">
            {/* todo-header */}
            <div className={styles.header}>
                <h1>Inbox</h1>
                <p>{now.toLocaleDateString('en-US', options)}</p>
            </div>
            {/* add-todo */}
            <div className={styles.add__todo}>
                <span>+</span>
                <h3>Add task</h3>
            </div>
            {/* todo form */}
            <form action="" className={styles.todo__form__container}>
                <input className={styles.todo__form__input} placeholder='Task Name' />
                <div className={styles.todo__form__footer}>
                    <p className={styles.todo__error}> Title is required</p>
                    <div className={styles.todo__form__buttons}>
                        <button>Cancle</button>
                        <button>Add task</button>
                    </div>

                </div>
            </form>
            {/* todolist */}
            <ul>
                {mockTodo.map((el) => (
                    <li className={styles.todo__item__container} key={el}>
                        <div className={styles.Checkbox__Container}>
                            <HiCheck className={styles.checkbox_icon} />
                        </div>
                        <p className={styles.done}>{`item-${el}`}</p>
                        <div className={styles.edit__icon}>
                            <HiPencil />
                        </div>
                        <div className={styles.delete__icon}>
                            <HiTrash />
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
