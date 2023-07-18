// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';
import { Addtodo } from './Addtodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
// import mockData from '../../data/todos.json'


export function TodoContent({todos,setTodos,setFilterList}) {


//add-todo
// const handleAddtodo=(newTodoObj)=>{
//     // let newTodoObj = {id:uuidv4(),task:newTask,status:false,ddate:''}
//     //แบบที่ 1 
//     // const newTodos = [newTodoObj,...todos]
//     // setTodos(newTodos)
//     //แบบที่ 2 update โดย callback
//     setTodos(currentState =>[newTodoObj,...currentState])
//     //          ^= เทียบเท่ากับ todos
//     // setFilterList(currentState =>[newTodoObj,...currentState])
// }

const handleEdittodo=(todoID,updateObj)=>{
    const foundedIndex = todos.findIndex(todoObj=>todoObj.id === todoID)
    if(foundedIndex ===-1){
        return;
    } 
    const newTodos = [...todos]    
    // แบบที่ 1
    // let oldtodoObj = newTodos[foundedIndex]
    // oldtodoObj.task=newTask
    // แบบที่ 2
    newTodos[foundedIndex]={...newTodos[foundedIndex],...updateObj }
    setTodos(newTodos)
    setFilterList(newTodos)
}

const handleDelete = (todoID) =>{
    let currTodoID = curr=>curr.filter((todoObj)=>todoObj.id !==todoID)
    setTodos(currTodoID)
    setFilterList(currTodoID)
} 

    return (
        <main className="content">
            <TodoHeader/>
            <Addtodo 
            setTodos={setTodos} 
            setFilterList={setFilterList} />
            <TodoLists todos={todos} onEditTodo={handleEdittodo} onDelete={handleDelete}/>
        </main>
    )
}
