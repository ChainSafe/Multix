import { useState, useEffect, useCallback } from "react";
import { Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { useSnackStack, ToastProps } from "./SnackStackProvider";
import LaunchIcon from '@mui/icons-material/Launch';
import { styled }  from "@mui/material/styles";

type SnackbarToastProps = {
  toast: ToastProps;
  className?: string;
};

const TIMEOUT = 300;

const SnackbarToast: React.FC<SnackbarToastProps> = ({ toast, className }) => {
  const [open, setOpen] = useState(true);
  const { removeToast } = useSnackStack();

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      removeToast(toast.key);
    }, TIMEOUT);
  }, [toast.key, removeToast]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    if (toast?.onClose) {
      toast.onClose();
    }
    close();
  };

  const onOpenLink = useCallback(() => {
    window.open(toast.link, "_blank")
  }, [toast.link])

  useEffect(() => {
    if (toast.duration !== 0) {
      setTimeout(() => {
        close();
      }, toast.duration || 6000);
    }
  }, [close, toast.duration]);

  return (
    <Grow className={className} in={open} timeout={TIMEOUT}>
      <Alert
        key={toast.key}
        severity={toast?.type || "info"}
        onClose={handleClose}
        variant="filled"
        sx={{
          minWidth: 300,
          width: { xs: 1, md: "auto" },
          mb: 1
        }}
        
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {toast?.title && <AlertTitle>{toast.title}</AlertTitle>}
          <Box className="linkIcon" 
            onClick={onOpenLink}>
            <LaunchIcon fontSize="small" />
          </Box>
        </div>
        {toast?.message}
        {toast?.children}
       
      </Alert>
    </Grow>
  );
};

export default styled(SnackbarToast)(({ theme }) => `
    .linkIcon {
        display: flex;
        cursor: pointer;
        padding-left: 1rem; 
    }
`)