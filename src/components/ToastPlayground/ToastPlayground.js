import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('')
  const [toastVariant, setToastVariant] = React.useState('notice')
  console.log(message)
  console.log(toastVariant)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form className={styles.controlsWrapper}
        onSubmit={(e) => handleSubmit(e)}
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

            {/* TODO Other Variant radio buttons here */}
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
