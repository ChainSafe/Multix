import { Box, Button, Grid } from "@mui/material";
import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom"

interface Props {
  className?: string;
}

const Success = ({ className }: Props) => {

  return (
    <Box className={className} >
      <h1>Multisig creation in progress...</h1>
      <Grid
        container
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={3}
        >
          <AccessTimeIcon className="icon" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          lg={9}
        >
          <h4>
            Good things take time! Refresh the home page ~30s after the tx finalization.
          </h4>
          <Button
            component={Link}
            to="/"
          >
            Home
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default styled(Success)(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  .icon {
    animation: spin 10s linear infinite;
    @keyframes spin {
                 0% { transform: rotate(-360deg); }
                 100% { transform: rotate(0deg); }
            }
            
    font-size: 10rem;
    color: ${theme.custom.text.addressColorLightGray};
    text-align: center;
  }
`)