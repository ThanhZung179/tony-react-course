import React from 'react'

// components
import Button from './Button';

// css module
import styles from './buttonCount.module.css';

function LogoutButton() {
  return (
    <div className={styles.link}>
      LogoutButton <Button text="LogoutButton" />

    </div>
  )
}

export default LogoutButton