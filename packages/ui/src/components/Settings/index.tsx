import React from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export const Settings: React.FC = () => {
  return (
    <Box role="presentation" sx={{ position: 'fixed', bottom: 26, right: 26 }}>
      <Tooltip title="Settings">
        <Fab color="primary" aria-label="settings">
          <SettingsIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};
