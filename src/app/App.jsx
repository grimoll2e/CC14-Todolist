import "./App.scss";
import { Header } from '../components/Header';
import { Sidebar } from "../components/Sidebar";
import { TodoContent } from "../components/Todo/TodoContent";
import { useState, useEffect } from 'react';
// import mockData from '../data/todos.json'
import { getSevenDayRange } from "../utils/DateUtils";
import axios from 'axios'

function App() {

  // logic state
  const [todos, setTodos] = useState([])
  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    // Run after dismount

    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/todos'
    // }).then(response => {
    //   console.log(response)
    //   let todoList = response.data.todos
    //   setTodos(todoList)
    //   setFilterList(todoList)
    // }).catch(err => {
    //   console.log(err.response.status)
    // })

    // async await
    async function fetchAllTodo() {
      try {
        let response = await axios.get('http://localhost:8080/todos')
        console.log(response)
        let todoList = response.data.todos
        setTodos(todoList)
        setFilterList(todoList)
      } catch (err) {
        console.log(err.response.status)
      }
    }
    fetchAllTodo()

  }, [])

  //logic function
  const handleFilterLists = (index) => {
    const [nowStr, nextSevenStr] = getSevenDayRange()
    let filterTodo = [...todos]

    // filter logic : schma for filter yyyy-mm-dd
    if (index === 0) {
      setFilterList(todos)
    } else if (index === 1) {
      filterTodo = todos.filter(todoObj => todoObj.date === nowStr)
      setFilterList(filterTodo)
    } else if (index === 2) {
      filterTodo = todos.filter(todoObj => todoObj.date >= nowStr && todoObj.date <= nextSevenStr)
    }
    // setTodos(filterTodo)
    setFilterList(filterTodo)
  }

  const handleSearch = (searchText) => {
    const newTodo = todos.filter((todoObj) => todoObj.task.toLocaleLowerCase().includes(searchText))
    setFilterList(newTodo)

  }

  return (
    <div className="container">
      <Header onSearchText={handleSearch} />
      <Sidebar onSelectTab={handleFilterLists} />
      <TodoContent todos={filterList} setTodos={setTodos} setFilterList={setFilterList}/>
    </div>
  );
}

export default App;
