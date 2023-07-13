import "./App.scss";
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { TodoContent } from "./components/Todo/TodoContent";
import { useState } from 'react';
import mockData from './data/todos.json'

function App() {
  const [todos, setTodos] = useState(mockData)

  const handleFilterLists = (index) => {
    // console.log("first",index)

    // filter logic : schma for filter yyyy-mm-dd
    if (index === 0) setTodos(mockData)
    else if (index === 1) {
      const nowObj = new Date()
      let nowStr = nowObj.toISOString().slice(0, 10) //yyyy-mm-dd

      const filterTodo = mockData.filter(todoObj => todoObj.due_date === nowStr)
      setTodos(filterTodo)
    }else if(index === 2){
      const nowObj = new Date()
      let nowStr = nowObj.toISOString().slice(0, 10) //yyyy-mm-dd
      const nextSevenDayObj =new Date(Date.now()+7*24*60*60*1000)
      let nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10) //yyyy-mm-dd
      const filterTodo = mockData.filter(todoObj => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenDayStr)
      setTodos(filterTodo)
    }
  }
  return (
    <div className="container">
      <Header />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
