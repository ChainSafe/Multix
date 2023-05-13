import { useState, useContext, createContext } from 'react';
import { ToastType } from '../components/ToastContent';
import Snackbar from '../components/Snackbar';

export type ToastProps = {
  key?: number;
  title?: string;
  message?: string;
  link?: string;
  duration?: number;
  type: ToastType;
  position?: {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right' | 'center';
  };
};

const MAX_VISIBLE_TOASTS = 3

export type ToastStackContextProps = {
  toastsPack: ToastProps[];
  setToastsPack: (toasts: ToastProps[]) => void;
  addToast: (toast: ToastProps) => void;
  removeToast: (key: ToastProps['key']) => void;
};

const ToastContextProvider  = createContext<ToastStackContextProps>({
  toastsPack: [],
  setToastsPack: (toasts) => {},
  addToast: (toast) => {},
  removeToast: (key) => {}
});

const ToastStackProvider: React.FC<React.PropsWithChildren> = ({
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

  const removeToast = (key: ToastProps['key']) => {
    setToastsPack((prev) => prev.filter((toast) => toast.key !== key));
  };

  return (
    <ToastContextProvider.Provider
      value={{ toastsPack, setToastsPack, addToast, removeToast }}
    >
      <Snackbar />
      {children}
    </ToastContextProvider.Provider>
  );
};

export const useToasts = () => useContext(ToastContextProvider);

export default ToastStackProvider;
