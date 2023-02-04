import { Grid, Paper, Box } from '@mui/material'
import React from 'react'

function MuiGrid() {
  return (
    <>
      <Paper sx={{ backgroundColor: 'vars.color1' }}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          sx={{
            alignContent: 'center',
            justifyContent: 'center',
            padding: '5px 20px 10px 20px',
          }}
        >
          <p>fdgdfg</p>
          <p>dfgdfg</p>
        </Box>
      </Paper>
      <br></br>
      <Grid
        container
        display={'flex'}
        direction={'row'}
        height={'30px'}
        sx={{
          background: 'vars.color1',
          padding: '0px',
          margin: '0',
        }}
      >
        nav
      </Grid>

      <Grid
        container
        display={'flex'}
        direction={'row'}
        height={'calc(100vh-30px)'}
        sx={{
          background: '#f00',
          padding: '0px',
          margin: '0',
        }}
      >
        <Grid
          item
          flex={2}
          sx={{ background: '#fc4', height: 'calc(100vh-30px)' }}
        >
          Sectionleft
        </Grid>
        <Grid
          item
          flex={8}
          sx={{
            background: '#999',
            height: 'calc(100vh-30px)',
          }}
        >
          Section right
        </Grid>
      </Grid>
    </>
  )
}

export default MuiGrid
