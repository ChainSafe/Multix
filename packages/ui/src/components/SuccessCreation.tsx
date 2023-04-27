import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props {
  className?: string;
}

const SuccessCreation = ({ className }: Props) => {

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
          md={4}
          lg={4}
        >
          <AccessTimeIcon className="icon" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
        >
          <h4 className="explainer">
            It shouldn't take more than 30s.<br />
            This page will refresh automatically.
          </h4>
        </Grid>
      </Grid>
    </Box>
  )
}

export default styled(SuccessCreation)(({ theme }) => `
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

  .explainer {
    margin-left: 1rem;
  }
`)