import Box from '@mui/material/Box'
import LocationSelector from './components/LocationSelector'

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LocationSelector />
    </Box>
  )
}

export default App