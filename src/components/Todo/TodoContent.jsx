import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Addtodo } from './Addtodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json'


export function TodoContent() {
const [todos,setTodos] = useState(mockData)
// console.log(uuidv4())
// console.log(uuidv4())
// console.log(uuidv4())
// console.log(uuidv4())

const handleAddtodo=()=>{
    let newTodoObj = {id:uuidv4(),task:"hello",status:false,due_date:''}
    //แบบที่ 1 
    // const newTodos = [newTodoObj,...todos]
    // setTodos(newTodos)
    //แบบที่ 2 update โกย callback
    setTodos(currentState =>[newTodoObj,...currentState])
    //          ^= เทียบเท่ากับ todos
}
    return (
        <main className="content">
            <TodoHeader/>
            <Addtodo/>
            <button onClick={handleAddtodo}>test</button>
            <TodoLists todos={todos}/>
        </main>
    )
}
