import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
function TodoItem(props) {
  return (
    <Paper
      component="li"
      variant="outlined"
      sx={{
        p: 1,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        sx={{ width: '100%' }}
      >

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ minWidth: 0, flex:1, }}
        >

          <Checkbox
            color="success"
            checked={props.task.completed}
            onChange={() => props.onToggle(props.task.id)}
          />

          <Typography
            sx={{
              overflowWrap: 'anywhere',
              textDecoration: props.task.completed
                ? 'line-through'
                : 'none',
              color: props.task.completed
                ? 'secondary'
                : 'primary',
            }}
          >
            {props.task.text}
          </Typography>
        </Stack>

        <Button variant="contained" color="error" type="button"
          aria-label={`Delete ${props.task.text}`}
          onClick={() => props.onDelete(props.task.id)}>
          Delete
        </Button>


      </Stack>

    </Paper>

  )
}
export default TodoItem