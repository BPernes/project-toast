import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Toast example!',
      variant: 'notice',
    },
  ])

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

  React.useEffect(() => {
    function removeToasts(e) {
      if (e.code === 'Escape') {
        setToasts([])
      }
    }

    window.addEventListener('keydown', (event) => removeToasts(event))

    return () => {
      window.removeEventListener('keydown', (event) => removeToasts(event))
    }
  }, [])

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
