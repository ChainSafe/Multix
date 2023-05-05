import { useState, useContext, createContext } from "react";

export type ToastProps = {
  /**
   * Key to render multiple toasts.
   * This is being set automatically unless specified manually.
   */
  key?: number;
  /**
   * Alert title
   */
  title?: string;
  /**
   * Alert message
   */
  message?: string;
  /**
   * Link
   */
  link?: string;
  /**
   * Custom component or html-layout
   */
  children?: React.ReactElement;
  /**
   * Indicates when the alert will disappear in ms. Defaults too 5000.
   * Pass 0 for infinite duration.
   */
  duration?: number;
  /**
   * Alert color
   */
  type?: "success" | "info" | "warning" | "error";
  /**
   * Alert position on the screen
   */
  position?: {
    vertical?: "top" | "bottom";
    horizontal?: "left" | "right" | "center";
  };
  /**
   * On Close callback
   */
  onClose?: () => void;
};

export type SnackStackContextProps = {
  toastsPack: ToastProps[];
  setToastsPack: (toasts: ToastProps[]) => void;
  addToast: (toast: ToastProps) => void;
  removeToast: (key: ToastProps["key"]) => void;
};

const SnackStackContext = createContext<SnackStackContextProps>({
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
    const rest = toastsPack.length < 3 ? toastsPack : toastsPack.slice(0, -1);
    setToastsPack([{ ...toast, key }, ...rest]);
  };

  const removeToast = (key: ToastProps["key"]) => {
    setToastsPack((prev) => prev.filter((toast) => toast.key !== key));
  };

  return (
    <SnackStackContext.Provider
      value={{ toastsPack, setToastsPack, addToast, removeToast }}
    >
      {children}
    </SnackStackContext.Provider>
  );
};

export const useSnackStack = () => useContext(SnackStackContext);

export default SnackStackProvider;
