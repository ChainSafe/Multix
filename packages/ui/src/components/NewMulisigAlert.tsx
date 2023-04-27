import { Alert, IconButton } from "@mui/material";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  className?: string;
  onClose: () => void
}

const NewMulisigAlert = ({ className = '', onClose }: Props) => {
  return (
    <Alert className={className} variant="outlined" severity="info">
      <div className="infoText">
        Your new multisig is being created. It will be available in ~30s from the dropdown.
      </div>
      <IconButton
        className="closeButton"
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Alert>
  )
}

export default styled(NewMulisigAlert)(({ theme }) => `
  width: 100%;

  .infoText {
    flex: 1;
  }

  .MuiAlert-message {
    display: flex;
    align-items: center;
    width: 100%;
  }
`)