import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey/useEscapeKey';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Toast example!',
      variant: 'notice',
    },
  ])

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape)

  function createToast(variant, message) {
    const nextToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message
    }

    setToasts((previusToast) => [...previusToast, nextToast])
  }

  function dismissToast(id) {
    const nextToast = toasts.filter((toast) => {
      return toast.id !== id
    })
    setToasts(nextToast)
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

