import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer, NavLink } from 'react-router-dom'
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationCart from '../NavigationItems/NavigationCart/NavigationCart';

const Header = () => {
    return (
      <header>

          <div className={styles.LogoContainer}>
            <Logo />
          </div>
          <div className={styles.NavigationContainer}>
          <NavigationItems />
          </div>
          <div className={styles.NavigationCartContainer}>
          <NavigationCart />
          </div>
        {/* <Navbar bg="dark" variant="dark" expand="lg" CollapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Logo />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      </header>
    );
}

export default Header
