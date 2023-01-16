import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import React, { useState } from 'react'

export default function MuiRadioButton() {
  const [gender, setGender] = useState<String>('f')
  return (
    <Box>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" error>
          Gender
        </FormLabel>
        <RadioGroup
          row
          defaultValue="f"
          value={gender as String}
          name="radio-buttons-group"
          onChange={(e) => {
            setGender(e.target.value)
            console.log(gender)
          }}
        >
          <FormControlLabel
            value="f"
            control={<Radio size="small" color="secondary" />}
            label="Female"
          />
          <FormControlLabel
            value="m"
            control={<Radio size="small" color="secondary" />}
            label="Male"
          />
          <FormControlLabel
            value="o"
            control={<Radio size="small" color="secondary" />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
