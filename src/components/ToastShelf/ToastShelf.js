import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast toastId={id} message={message} variant={variant} setToasts={setToasts} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
