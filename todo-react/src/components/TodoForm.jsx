import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

function TodoForm(props) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const taskText = inputValue.trim()
    if (!taskText) return

    props.onAddTask(taskText)
    setInputValue('')
  }

  return (
    <Stack
      component="form"
      direction="row"
      spacing={1}
      onSubmit={handleSubmit}
    >
      <TextField fullWidth id="filled-basic" label="Enter a task" variant="filled" color="secondary"
        aria-label="New task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <Button variant="contained" color="secondary" size="small" type="submit">Add</Button>
      
    </Stack>
  )
}

export default TodoForm