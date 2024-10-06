
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #f0a500; // Change color on hover
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>DL Prep</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
