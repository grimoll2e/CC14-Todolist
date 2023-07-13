import "./App.scss";
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { TodoContent } from "./components/Todo/TodoContent";
import { useState } from 'react';
import mockData from './data/todos.json'
import { getSevenDayRange } from "./utils/DateUtils";

function App() {
  const [todos, setTodos] = useState(mockData)

  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange()
    let filterTodo = [...mockData]

    // filter logic : schma for filter yyyy-mm-dd

    if (index === 1) {
      filterTodo = mockData.filter(todoObj => todoObj.due_date === nowStr)
    } else if (index === 2) {
      filterTodo = mockData.filter(todoObj => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenStr)
    }
    setTodos(filterTodo)
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
