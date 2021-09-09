import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavigationItem.module.css'

const NavigationItem = ({ link, children }) => {
    return (
    
      <li className={styles.NavigationItem}>
        <NavLink to={link}>{children}</NavLink>
      </li>
    );
}


export default NavigationItem
