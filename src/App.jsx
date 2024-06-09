import React, {useState, createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Todos from '../components/Todos'
import TodoForm from '../components/TodoForm'

export const TodoContext = createContext()

function App(){
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch With Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);
  console.log(todos)

  const toggleCompleted = (todoid) => {
    const updatedTodos = todos.map((todo) => {
      if (todoid === todo.id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoid)  => {
    const newTodos = todos.filter(todo => todo.id !== todoid)
    setTodos(newTodos);
  }

  // tambahkan function addTodo
  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }
    return (
      <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
        <div style={styles.container}>
          <h1 style={styles.title}>My Todo List</h1>
          {/* tambahkan todoform */}
          <TodoForm addTodo={addTodo}/>
          <Todos 
            todos={todos}
          />
        </div>
      </TodoContext.Provider>
    )
}  

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  }
}

export default App
