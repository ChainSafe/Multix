import { useState, useContext, createContext } from "react";
import { ToastType } from "../ToastContent";
import Snackbar from "./Snackbar";

export type ToastProps = {
  key?: number;
  title?: string;
  message?: string;
  link?: string;
  duration?: number;
  type: ToastType;
  position?: {
    vertical?: "top" | "bottom";
    horizontal?: "left" | "right" | "center";
  };
};

const MAX_VISIBLE_TOASTS = 3

export type SnackStackContextProps = {
  toastsPack: ToastProps[];
  setToastsPack: (toasts: ToastProps[]) => void;
  addToast: (toast: ToastProps) => void;
  removeToast: (key: ToastProps["key"]) => void;
};

const SnackbarContextProvider  = createContext<SnackStackContextProps>({
  toastsPack: [],
  setToastsPack: (toasts) => {},
  addToast: (toast) => {},
  removeToast: (key) => {}
});

const SnackStackProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [toastsPack, setToastsPack] = useState<ToastProps[]>([]);

  const addToast = (toast: ToastProps) => {
    const key = toast.key || Date.now();

    // Prevent duplicated toasts
    if (toastsPack.find((toast) => toast.key === key)) {
      return;
    }
    const rest = toastsPack.length < MAX_VISIBLE_TOASTS ? toastsPack : toastsPack.slice(0, -1);
    setToastsPack([{ ...toast, key }, ...rest]);
  };

  const removeToast = (key: ToastProps["key"]) => {
    console.log('key', key)
    setToastsPack((prev) => prev.filter((toast) => toast.key !== key));
  };

  return (
    <SnackbarContextProvider.Provider
      value={{ toastsPack, setToastsPack, addToast, removeToast }}
    >
      <Snackbar />
      {children}
    </SnackbarContextProvider.Provider>
  );
};

export const useSnackStack = () => useContext(SnackbarContextProvider);

export default SnackStackProvider;
