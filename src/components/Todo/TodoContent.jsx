import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Addtodo } from './Addtodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json'


export function TodoContent() {
const [todos,setTodos] = useState(mockData)

//add-todo
const handleAddtodo=(newTask)=>{
    let newTodoObj = {id:uuidv4(),task:newTask,status:false,due_date:''}
    //แบบที่ 1 
    // const newTodos = [newTodoObj,...todos]
    // setTodos(newTodos)
    //แบบที่ 2 update โกย callback
    setTodos(currentState =>[newTodoObj,...currentState])
    //          ^= เทียบเท่ากับ todos
}

const handleEdittodo=(todoID,updateObj)=>{
    const foundedIndex = todos.findIndex(todoObj=>todoObj.id === todoID)
    if(foundedIndex ==-1){
        return;
    } 
    const newTodos = [...todos]    
    // แบบที่ 1
    // let oldtodoObj = newTodos[foundedIndex]
    // oldtodoObj.task=newTask
    // แบบที่ 2
    newTodos[foundedIndex]={...newTodos[foundedIndex],...updateObj }
    setTodos(newTodos)
}

const handleDelete = (todoID) =>{
    const foundedIndex = todos.findIndex(todoObj=>todoObj.id === todoID)
    if(foundedIndex ==-1){
        return;
    } 
    const newTodos = [...todos]  
    newTodos.splice(foundedIndex,1)
    setTodos(newTodos)
} 

    return (
        <main className="content">
            <TodoHeader/>
            <Addtodo onAddtodo={handleAddtodo}/>
            <TodoLists todos={todos} onEditTodo={handleEdittodo} onDelete={handleDelete}/>
        </main>
    )
}
