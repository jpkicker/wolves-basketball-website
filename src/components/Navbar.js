import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import logoImgUrl from 'url:../assets/Wellington_Aug_2020_Design_Navy (1).jpg';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const NavbarContainer = styled.nav`
  background-color: var(--navy);
  color: white;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  animation: ${slideDown} 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--gold) 0%, var(--gold-dark) 50%, var(--gold) 100%);
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 4px;
`;

const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const LogoTextMain = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  color: var(--gold);
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const LogoTextSub = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 44px;
    height: 44px;
    padding: 10px;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${props => props.$isOpen ? 'var(--gold)' : 'white'};
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: ${props => props.$isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    opacity: ${props => props.$isOpen ? 0 : 1};
    transform: ${props => props.$isOpen ? 'translateX(-10px)' : 'translateX(0)'};
  }

  &:nth-child(3) {
    transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    background: linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%);
    padding: 6rem 0 2rem;
    gap: 0;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${props => props.$isOpen ? '-10px 0 40px rgba(0,0,0,0.5)' : 'none'};
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? 'var(--gold)' : 'white'};
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 1.5rem 1.25rem;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 3px;
    background: var(--gold);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--gold);

    &::before {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem 2rem;
    font-size: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &::before {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${props => props.$isActive ? 'var(--gold)' : 'transparent'};
      transition: background 0.3s ease;
    }

    &:hover::after {
      background: var(--gold);
    }
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 999;
  }
`;

const NavSpacer = styled.div`
  height: 70px;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Logo to="/" onClick={closeMenu}>
            <LogoImg src={logoImgUrl} alt="Wellington Wolves Logo" />
            <LogoTextContainer>
              <LogoTextMain>WOLVES ELITE</LogoTextMain>
              <LogoTextSub>17U • Puma NXTpro</LogoTextSub>
            </LogoTextContainer>
          </Logo>
          <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
            <HamburgerLine $isOpen={isMenuOpen} />
            <HamburgerLine $isOpen={isMenuOpen} />
            <HamburgerLine $isOpen={isMenuOpen} />
          </HamburgerButton>
          <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
          <NavLinks $isOpen={isMenuOpen}>
            <NavLink to="/" onClick={closeMenu} $isActive={isActive('/')}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} $isActive={isActive('/about')}>About</NavLink>
            <NavLink to="/players" onClick={closeMenu} $isActive={isActive('/players')}>Roster</NavLink>
            <NavLink to="/travel" onClick={closeMenu} $isActive={isActive('/travel')}>Schedule</NavLink>
            <NavLink to="/announcements" onClick={closeMenu} $isActive={isActive('/announcements')}>News</NavLink>
          </NavLinks>
        </NavbarContent>
      </NavbarContainer>
      <NavSpacer />
    </>
  );
};

export default Navbar;
