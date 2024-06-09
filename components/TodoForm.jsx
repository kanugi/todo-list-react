import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  // Definisikan state "title"
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title) // tambahkan argument title
    setTitle('') // reset title form
  }

  // Definisikan function "handleChangeTitle"
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  
  // Periksa apakah function "handleChangeTitle" berfungsi
  console.log(title)

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          // Tambahkan event handler "onChange"
          onChange={(event) => {
            handleChangeTitle(event)
          }}
          value={title} // atur nilai dari title sesuai dengan state "title"-nya
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '50px',
    width: '30%',
    fontSize: '16px',
    padding: '0 16px',
    borderRadius: '10px',
    boxShadow: '3px 3px #3d85c6',
  },
  button: {
    height: '53px',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '10px',
    marginLeft: '20px',
    backgroundColor: '#5dca88',
    boxShadow: '2px 2px #1a7940',
  },
}

export default TodoForm