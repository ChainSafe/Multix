import React, { useCallback, useRef, useState } from "react"
import ToastBar from "../components/ToastBar"
import { Toast } from "../components/ToastContent"

type ToastContextProps = {
    children: React.ReactNode | React.ReactNode[]
}

export interface IToastContext {
    addToast: (toastParams: Omit<Toast, "id">) => number
    removeToast: (toastId: number) => void
    removeAllToasts: () => void
    toasts: Toast[]
}

const ToastContext = React.createContext<IToastContext | undefined>(undefined)

const ToastContextProvider = ({ children }: ToastContextProps) => {
  const [toastQueue, setToastQueue] = useState<Toast[]>([])
  // using useRef instead of useState to keep a tracker over the exact toast array
  const toasts = useRef<Toast[]>([])

  const removeToast = useCallback((toastId: number) => {
    toasts.current = toasts.current.filter((toast) => toast.id !== toastId)
    setToastQueue(toasts.current)
  }, [toasts])

  const removeAllToasts = useCallback(() => {
    toasts.current = []
    setToastQueue(toasts.current)
  }, [toasts])

  const addToast = useCallback((toastParams: Omit<Toast, "id">) => {
    const id = Date.now()
    toasts.current = [
      ...toasts.current,
      {
        id,
        ...toastParams,
      }
    ]
    setToastQueue(toasts.current)

    return id
  }, [])


  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        removeAllToasts,
        toasts: toastQueue
      }}
    >
      {toastQueue.map((toast) =>
        <ToastBar toast={toast} key={toast.id} />
      )}
      {children}
    </ToastContext.Provider>
  )
}

const useToasts = () => {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToasts must be used within a ToastProvider")
  }
  return context
}

export { ToastContextProvider, useToasts }
