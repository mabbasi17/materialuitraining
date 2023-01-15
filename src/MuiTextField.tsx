import { Stack, Button, TextField } from '@mui/material'

export function MuiTextField() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <TextField
          variant="outlined"
          label="outlined"
          size="small"
          color="secondary"
        ></TextField>
        <TextField variant="filled" label="filled"></TextField>
        <TextField variant="standard" label="standard"></TextField>
        <Stack spacing={2}>
          <TextField
            variant="outlined"
            label="useremail"
            type="email"
            size="small"
            color="secondary"
            helperText="Enter you email correctly"
            required
          ></TextField>

          <TextField
            variant="outlined"
            label="Password"
            type="email"
            size="small"
            color="secondary"
            helperText="Enter your password"
            required
          ></TextField>

          <TextField
            variant="outlined"
            label="Passwrod Again"
            type="email"
            size="small"
            color="secondary"
            helperText="Enter password again"
            required
          ></TextField>
        </Stack>
      </Stack>
    </Stack>
  )
}
