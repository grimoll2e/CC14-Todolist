import { TodoItem } from './TodoItem';


export function TodoLists({todos,onEditTodo,onDelete}) {

    return (
        <ul>
            {todos.map((el) => (
                <TodoItem 
                    key={el.id}
                todo={el}
                onEditTodo={onEditTodo}
                onDelete={onDelete}
                />
            ))}
        </ul>
    )
}
