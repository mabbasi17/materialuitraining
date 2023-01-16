import React from 'react'
import Box from '@mui/material/Box'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

function MuiCheckBox() {
  const checked = true
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                alert(e.target.checked)
              }}
            />
          }
          label="Label"
        />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </Box>
  )
}

export default MuiCheckBox
