//import Nav from "react-bootstrap/Nav";
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/myLogo.svg';

const navbarStyle = {
  backgroundColor: '#1d3f72',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '20rem', maxHeight: '7rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
