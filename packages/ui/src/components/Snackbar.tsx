import { Stack, Snackbar as MuiSnackbar, styled } from "@mui/material";
import { useToasts } from "../contexts/ToastContext";
import ToastBar from "./ToastBar";

interface Props {
  className?: string
}

const Snackbar: React.FC  = ({ className }: Props) => {
  const { toastsPack } = useToasts();
  const firstToast = toastsPack[0];

  return (
    <MuiSnackbar
      className={className}
      open={!!firstToast}
      autoHideDuration={12000}
      anchorOrigin={{
        vertical: firstToast?.position?.vertical || "bottom",
        horizontal: firstToast?.position?.horizontal || "left"
      }}>
      <Stack flexDirection="column" gap={1}>
        {toastsPack.map((toast) => (
          <ToastBar toast={{
            id: toast.key, 
            type: toast.type, 
            title: toast.title ?? '', 
            link: toast.link }} 
          key={toast.key} />
        ))}
      </Stack>
    </MuiSnackbar>
  );
};

export default styled(Snackbar)(({ theme }) => `
  .css-cpgvjg-MuiSnackbar-root {
    position: relative;
  }
`)
