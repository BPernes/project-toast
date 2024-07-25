import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const [toastVariant, setToastVariant] = React.useState('notice')

  function handleDismiss() {
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isOpen && (
        <Toast message={message} variant={toastVariant} handleDismiss={handleDismiss} />
      )}

      <div className={styles.controlsWrapper}>
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

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setIsOpen(true)}>{isOpen ? "Dismiss Toast!" : "Pop Toast!"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
