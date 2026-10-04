import TodoItem from './TodoItem.jsx'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function TodoList(props) {
  return (
    <Stack spacing={1} sx={{ mt: 2 }}>
      {props.tasks.length === 0 ? (
        <Typography
          color="secondary"
          align="center"
          sx={{ py: 3 }}
        >
          No tasks yet
        </Typography>
      ) : (
        <Stack component="ul" spacing={1} sx={{ m: 0, p: 0,  listStyle: 'none',}}>
          {props.tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={props.onToggle}
              onDelete={props.onDelete}
            />
          ))}
        </Stack>
      )}
    </Stack>
  )

}

export default TodoList