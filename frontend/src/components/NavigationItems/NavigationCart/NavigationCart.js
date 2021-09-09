import React from 'react'
import NavigationCartItem from './NavigationCartItem/NavigationCartItem'
import styles from './NavigationCart.module.css'

const NavigationCart = () => {
    return (
        
        <ul className={styles.NavigationCart}>
            <NavigationCartItem link='/cart'> <i className="fas fa-shopping-cart"></i> </NavigationCartItem>
            <NavigationCartItem link='/wishlist'> <i className="far fa-heart"></i> </NavigationCartItem>
            <NavigationCartItem link='/login'> <i className="far fa-user"></i> </NavigationCartItem>
        </ul>
    )
}

export default NavigationCart
