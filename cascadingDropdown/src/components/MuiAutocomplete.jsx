import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

function MuiAutocomplete({
  label,
  options,
  value,
  onChange,
  disabled = false,
  size = 'small',
  fullWidth = true,
  getOptionLabel,
  loading = false,
}) {
  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      getOptionLabel={getOptionLabel}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
        />
      )}
    />
  )
}

export default MuiAutocomplete