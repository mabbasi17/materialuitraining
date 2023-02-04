import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const Skills = ['html', 'css', 'javascript', 'php']

function MuiAutocomplete() {
  const [selectedoption, setSelectedoption] = useState<String | null>(null)
  console.log(selectedoption)
  return (
    <Stack spacing={2} width={'350px'}>
      <Autocomplete
        options={Skills}
        value={selectedoption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(e: any, newValue: String | null) => {
          setSelectedoption(newValue)
        }}
      />
    </Stack>
  )
}

export default MuiAutocomplete
