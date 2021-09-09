import React from 'react'
import myLogo from './logo.png';
import styles from './Logo.module.css'

const Logo = () => {
    return (
            <img className={styles.Logo} src={myLogo} alt='My Logo' />
    )
}

export default Logo
