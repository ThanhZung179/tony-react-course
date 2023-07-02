import React from 'react'

// components
import Button from './Button';

// css module
import styles from './button.module.css';

function LoginButton() {
  return (
    <div className={styles.link}>
      LoginButton <Button text="LoginButton" />

    </div>
  )
}

export default LoginButton