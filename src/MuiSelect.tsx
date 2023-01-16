import { InputAdornment, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import KeyIcon from '@mui/icons-material/Key'

export default function MuiSelect() {
  const [selectdata, setselectdata] = useState<any>([])
  return (
    <Box width={'250px'}>
      <Typography variant="h6" gutterBottom>
        Select
      </Typography>
      <TextField
        size="medium"
        variant="outlined"
        label="Select a Country"
        select
        fullWidth
        value={selectdata}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          ),
        }}
        SelectProps={{
          multiple: true,
        }}
        onChange={(e) => {
          setselectdata(e.target.value as String)
          alert(selectdata)
        }}
      >
        <MenuItem value="usa">usa</MenuItem>
        <MenuItem value="sy">syria</MenuItem>
        <MenuItem value="eg">egypt</MenuItem>
      </TextField>
    </Box>
  )
}
