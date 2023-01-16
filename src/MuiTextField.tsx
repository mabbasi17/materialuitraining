import {
  Stack,
  Button,
  TextField,
  Typography,
  Box,
  InputAdornment,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import KeyIcon from '@mui/icons-material/Key'
import { positions } from '@mui/system'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'

export function MuiTextField() {
  const [formdata, setFormdata] = useState<any>()

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
      <Stack spacing={4}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField
          variant="outlined"
          label="username"
          color="secondary"
          helperText="username must be 8 letters at least"
          size="small"
          type="text"
          onChange={(e) => {
            setFormdata({ ...formdata, username: e.target.value })
            console.log(formdata)
          }}
        ></TextField>
        <TextField
          label="password"
          color="secondary"
          helperText="password must be 8 letters at least"
          size="small"
          type="password"
          onChange={(e) => {
            setFormdata({ ...formdata, password: e.target.value })
            console.log(formdata)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            readOnly: true,
          }}
        ></TextField>
        <TextField
          label="OnChange Action"
          variant="outlined"
          size="small"
          required
          error
          value={formdata?.password}
          onChange={(e) => {
            setFormdata({ ...formdata, password: e.target.value })
            console.log(formdata)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          startIcon={<SendIcon />}
          size="medium"
          color="secondary"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  )
}
