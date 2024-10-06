
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const FooterLink = styled.a`
  color: #f0a500;
  text-decoration: none;

  &:hover {
    color: #fff; // Change color on hover
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 DL Prep. All rights reserved.</FooterText>
      <FooterLinks>
        <FooterLink href="#privacy">Privacy Policy</FooterLink>
        <FooterLink href="#terms">Terms of Service</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
