import { Box } from '@mui/material'
import React from 'react'

function MuiBox() {
  return (
    <Box
      sx={{
        backgroundColor: 'error.main',
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        padding: '5px 10px 20px 25px',

        '&:hover': { backgroundColor: 'error.light' },
      }}
    >
      ddf
    </Box>
  )
}

export default MuiBox
