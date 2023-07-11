import styles from './TodoItem.module.scss'
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";

export function TodoItem({value}) {
    return (
        <li className={styles.todo__item__container} key={value}>
            <div className={styles.checkbox__container}>
                <HiCheck className={styles.checkbox_icon} />
            </div>
            <p className={styles.done}>{`item-${value}`}</p>
            <div className={styles.edit__icon}>
                <HiPencil />
            </div>
            <div className={styles.delete__icon}>
                <HiTrash />
            </div>
        </li>
    )
}
