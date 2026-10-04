import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

function App() {
  const [tasks, setTasks] = useState([])
  const remainingTasks = tasks.filter((task) => !task.completed).length

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    )
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        
        display: 'grid',
        placeItems: 'center',
        p: 3,
      }}
    >
      <Paper
        sx={{
          backgroundColor: '#f8bbf9',
          width: '100%',
          maxWidth: 560,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 2,
            mb: 3,
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            My Todo List
          </Typography>
          <Typography variant="body2" color="secondary">
            {remainingTasks} remaining
          </Typography>
        </Box>
        <TodoForm onAddTask={addTask} />
        <TodoList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </Paper>
    </Box>
  )
}

export default App
