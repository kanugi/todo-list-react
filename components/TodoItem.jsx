import React, { useContext } from 'react'
import { TodoContext } from '../../todo-list/src/App'

const TodoItem = ({ todo }) => {
  
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through', color: '#f35246' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <div style={styles.todoItem}>
      <input 
      type="checkbox" 
      style={styles.checkbox}
      onChange={() => toggleCompleted(todo.id)} 
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={handleDelete}>x</button>
    </div>
  )

}

const styles = {
  todoItem: {
    border: '2px dashed #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 12px',
  },
  checkbox: {
    marginRight: '16px',
    height: '19px',
    width: '19px',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '25px',
    width: '25px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem