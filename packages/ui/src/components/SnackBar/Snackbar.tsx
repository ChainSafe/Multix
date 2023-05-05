import { Stack, Snackbar as MuiSnackbar } from "@mui/material";
import { useSnackStack } from "./SnackStackProvider";
import SnackbarToast from "./SnackToast";

const Snackbar: React.FC = () => {
  const { toastsPack } = useSnackStack();

  const firstToast = toastsPack[0];

  return (
    <MuiSnackbar
      open={!!firstToast}
      autoHideDuration={12000}
      transitionDuration={0}
      anchorOrigin={{
        vertical: firstToast?.position?.vertical || "bottom",
        horizontal: firstToast?.position?.horizontal || "left"
      }}
      sx={{
        mt: "env(safe-area-inset-top)",
        mb: "env(safe-area-inset-bottom)"
      }}
    >
      <Stack flexDirection="column" gap={1}>
        {toastsPack.map((toast) => (
          <SnackbarToast key={toast.key} toast={toast} />
        ))}
      </Stack>
    </MuiSnackbar>
  );
};

export default Snackbar;
