//This component is responsible for rendering the navigation bar or header of the application.
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">News App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
