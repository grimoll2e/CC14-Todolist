import { useState } from 'react';
import { Addtodo } from './Addtodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json'


export function TodoContent() {
const [todos,setTodos] = useState(mockData)
    
    return (
        <main className="content">
            <TodoHeader/>
            <Addtodo/>
            <TodoLists todos={todos}/>
        </main>
    )
}
