import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--navy-dark);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`;

const FooterMain = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  @media (max-width: 600px) {
    order: -1;
  }
`;

const BrandName = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`;

const BrandTagline = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const BrandDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FooterSection = styled.div``;

const SectionTitle = styled.h4`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: var(--gold);
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

const ExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: var(--gold);
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
`;

const FooterBottomContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
`;

const CircuitBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterMain>
        <FooterBrand>
          <BrandName>WELLINGTON WOLVES</BrandName>
          <BrandTagline>17U Elite Basketball</BrandTagline>
          <BrandDescription>
            Building champions on and off the court through elite training,
            competitive play, and character development.
          </BrandDescription>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://instagram.com/wellingtonwolves2027balcarcel" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://x.com/wolves2027_Bal" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </FooterBrand>

        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/players">Roster</FooterLink>
            <FooterLink to="/travel">Schedule</FooterLink>
            <FooterLink to="/announcements">News</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Circuits</SectionTitle>
          <FooterLinks>
            <ExternalLink href="https://nxtprohoops.com" target="_blank" rel="noopener noreferrer">
              Puma NXTpro
            </ExternalLink>
            <ExternalLink href="https://hoopseen.com" target="_blank" rel="noopener noreferrer">
              HOOPSEEN
            </ExternalLink>
            <ExternalLink href="https://ontheradarhoops.com" target="_blank" rel="noopener noreferrer">
              On The Radar
            </ExternalLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo>
            <ContactItem>
              <strong>Email</strong><br />
              troy1028@bellsouth.net
            </ContactItem>
            <ContactItem>
              <strong>Phone</strong><br />
              (561) 685-5674
            </ContactItem>
            <ContactItem>
              <strong>Location</strong><br />
              Wellington, FL
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterMain>

      <FooterBottom>
        <FooterBottomContent>
          <Copyright>
            &copy; {currentYear} Wellington Wolves 17U Elite. All rights reserved.
          </Copyright>
          <CircuitBadge>
            Puma NXTpro Circuit Team
          </CircuitBadge>
        </FooterBottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
