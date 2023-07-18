import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';


export const deleteTodoAPI = async(todoId)=> await axios.delete(`/todos/${todoId}`)

export const addTodoAPI =  async(todoObj)=> await axios.post('/todos', todoObj)

export const updateTodoAPI = async(oldTodoId,todoRequestObj)=> await axios.put(`/todos/${oldTodoId}`,todoRequestObj)