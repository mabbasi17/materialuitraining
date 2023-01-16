import { useTheme } from '@emotion/react'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'
import React from 'react'

function MuiSwitch() {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              color="error"
              size="small"
              defaultChecked
              onChange={(e) => {
                console.log(e.target.checked)
                alert(e.target.checked)
              }}
            />
          }
          label="DarkMode"
        />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </Box>
  )
}

export default MuiSwitch
