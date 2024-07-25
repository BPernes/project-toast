import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('')
  const [toastVariant, setToastVariant] = React.useState('notice')
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Toast example!',
      variant: 'notice',
    },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    const nextToast = {
      id: crypto.randomUUID(),
      variant: toastVariant,
      message: message
    }

    setToasts((previusToast) => [...previusToast, nextToast])
    setMessage('')
    setToastVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} setToasts={setToasts} />

      <form className={styles.controlsWrapper}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant, index) => (
              <label key={index} htmlFor={`variant${variant}`}>
                <input
                  id={`variant${variant}`}
                  type="radio"
                  name={variant}
                  value={variant}
                  checked={variant === toastVariant}
                  onChange={(e) => setToastVariant(e.target.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
