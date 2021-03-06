import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './NavigationItems.module.css'

const NavigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/' exact> Home </NavigationItem>           
            <NavigationItem link='/shop' > Shop </NavigationItem>           
            <NavigationItem link='/contact' > Contact </NavigationItem>           
        </ul>
    )
}

export default NavigationItems
