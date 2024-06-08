import React from 'react'

// tambahkan params deleteTodo
const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  // Tambahkan fungsi handleDelete 
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
      {/* Tambahkan onclick untuk delete */}
      <button style={styles.button} onClick={handleDelete}>x</button>
    </div>
  )

}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 12px',
  },
  checkbox: {
    marginRight: '16px',
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem