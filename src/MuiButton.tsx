import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CallEndIcon from '@mui/icons-material/CallEnd'
import IconButton from '@mui/material/IconButton'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import { useState } from 'react'
import Typography from '@mui/material/Typography'

export const MuiButton = () => {
  const [alignment, setAalignment] = useState<String[]>(['middle'])

  const handleAlignmentChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedalignment: String[],
  ) => {
    setAalignment(updatedalignment)
    console.log(alignment)
  }
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={'row'}>
        <Button variant="text" href="#">
          text
        </Button>
        <Button variant="contained" href="#">
          contained
        </Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={4} direction={'row'}>
        <Button variant="contained" color="primary">
          contained
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>

        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={4} direction={'row'}>
        <Button variant="outlined" color="primary">
          outlined
        </Button>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>

        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={4} direction={'row'}>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>

        <Button variant="text" color="success">
          success
        </Button>
      </Stack>
      {/* important diplay block */}
      <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant="contained" size="large">
          large
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="small">
          small
        </Button>
      </Stack>

      <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant="contained" size="medium" startIcon={<SendIcon />}>
          StartIcon
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="warning"
          endIcon={<CallEndIcon />}
          disableElevation
          disableRipple
          onClick={() => alert('Clicked')}
        >
          EndtIcon
        </Button>

        <IconButton color="error" size="large">
          <SendIcon />
        </IconButton>
        <ButtonGroup
          orientation="horizontal"
          variant="contained"
          color="secondary"
          size="small"
        >
          <Button>sdf</Button>
          <Button>sdf</Button>
          <Button>sdf</Button>
        </ButtonGroup>

        <Stack spacing={2} direction="row">
          <ToggleButtonGroup
            orientation="vertical"
            exclusive
            value={alignment}
            onChange={handleAlignmentChange}
          >
            <ToggleButton value="left">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="middle">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  )
}
