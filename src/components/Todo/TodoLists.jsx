import { TodoItem } from './TodoItem';


export function TodoLists({todos}) {

    return (
        <ul>
            {todos.map((el) => (
                <TodoItem 
                    key={el.id}
                todo={el}/>
            ))}
        </ul>
    )
}
