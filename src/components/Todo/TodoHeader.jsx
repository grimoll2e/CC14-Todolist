import styles from './TodoHeader.module.scss'

export function TodoHeader() {

    const now = new Date()
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    
    return (
        <div className={styles.header}>
            <h1>Inbox</h1>
            <p>{now.toLocaleDateString('en-US', options)}</p>
        </div>
    )
}
