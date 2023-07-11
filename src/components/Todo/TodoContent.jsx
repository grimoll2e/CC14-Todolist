import styles from './TodoContent.module.scss' //module css

export function TodoContent() {

    const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);
    const now =new Date()
    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    console.log(now.toLocaleDateString('en-US',options))
    return (
        <main className="content">
            <div className={styles.header}>
                <header>Inbox</header>
                <p>{now.toLocaleDateString('en-US',options)}</p>
            </div>
            <div>
                addtodo
            </div>
            <ul>
                {mockTodo.map((el) => <li key={el}>{`item-${el}`}</li>)}
            </ul>
        </main>
    )
}
