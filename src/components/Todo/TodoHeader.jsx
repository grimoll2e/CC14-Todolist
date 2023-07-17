import styles from './TodoHeader.module.scss'
import { getFormattedDate } from '../../utils/DateUtils';


export function TodoHeader() {
    
    return (
        <div className={styles.header}>
            <h1>Today</h1>
            <p>{getFormattedDate(Date.now())}</p>
        </div>
    )
}
