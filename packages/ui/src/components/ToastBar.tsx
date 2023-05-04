import { IconButton, Snackbar } from "@mui/material"
import { useToasts } from "../contexts/ToastContext"
import CloseIcon from '@mui/icons-material/Close';
import ToastContent from "./ToastContent";
import React, { useCallback } from "react";
import { styled }  from "@mui/material/styles";
import { Toast } from "./ToastContent"

interface Props {
  toast: Toast
}

const ToastBar = ({ toast }: Props) => {
  const { id, title, type, link } = toast
  const { removeToast } = useToasts()

  const handleClose = useCallback((event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    removeToast(id);
  }, [removeToast, id]);

  return <Snackbar
    open={true}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    autoHideDuration={toast.type === "error" ? null : 6000}
    onClose={handleClose}
    key={id}
    action={
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    }
    message={
      <ToastContent
        type={type}
        title={title}
        key={id}
        id={id}
        link={link}
      />
    }

  />
}

export default styled(ToastBar)(({ theme }) => `

`)