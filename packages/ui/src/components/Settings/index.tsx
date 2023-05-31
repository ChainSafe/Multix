import { Box, Fab, Tooltip } from '@mui/material'
import { Settings as SettingsIcon } from '@mui/icons-material'

export const Settings = () => {
  return (
    <Box
      role="presentation"
      sx={{ position: 'fixed', bottom: 26, right: 26 }}
    >
      <Tooltip title="Settings">
        <Fab
          color="primary"
          aria-label="settings"
        >
          <SettingsIcon />
        </Fab>
      </Tooltip>
    </Box>
  )
}
