import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavigationCartItem.module.css'

const NavigationCartItem = ({ link, children }) => {
    return (
        <li className={styles.NavigationCartItem}>
            <NavLink to={link}>{children}</NavLink>
        </li>
    )
}

export default NavigationCartItem
