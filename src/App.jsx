import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from '../components/Todos'

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

  // fungsi filter untuk delete todo
  const deleteTodo = (todoid)  => {
    const newTodos = todos.filter(todo => todo.id !== todoid)
    setTodos(newTodos);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted}
      // Tambahkan parameter deleteTodo
      deleteTodo={deleteTodo}/>
    </div>
  )
}  

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
