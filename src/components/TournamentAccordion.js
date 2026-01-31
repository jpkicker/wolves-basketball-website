import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { tournaments, circuitColors } from '../data/schedule2026';
import nxtproLogo from 'url:../assets/nxtpro-logo.webp';
import hoopseenLogo from 'url:../assets/hoopseen-logo.png';
import otrLogo from 'url:../assets/otr-logo.png';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AccordionContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  margin-bottom: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: var(--white);
  animation: ${fadeInUp} 0.4s ease-out backwards;
  animation-delay: ${props => props.$index * 0.03}s;
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 130px 1fr auto 40px;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${props => props.$isOpen ? 'var(--navy)' : 'var(--white)'};
  color: ${props => props.$isOpen ? 'white' : 'var(--navy)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  min-height: 70px;
  gap: 1rem;

  &:hover {
    background-color: ${props => props.$isOpen ? 'var(--navy)' : 'var(--gray-100)'};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1.25rem;
    min-height: auto;
  }
`;

const DateCell = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${props => props.$isOpen ? 'var(--gold)' : 'var(--gray-500)'};

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const EventName = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  color: ${props => props.$isOpen ? 'var(--white)' : 'var(--navy)'};

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-self: end;

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

const CircuitLogo = styled.img`
  height: 22px;
  width: auto;
  background-color: ${props => props.$light ? 'transparent' : '#000'};
  padding: ${props => props.$light ? '0' : '4px 8px'};
  border-radius: 4px;
  opacity: 0.9;
`;

const LocationCell = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.7)' : 'var(--gray-500)'};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ExpandIcon = styled.span`
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  justify-self: end;
  color: ${props => props.$isOpen ? 'var(--gold)' : 'var(--gray-500)'};

  @media (max-width: 768px) {
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
  }
`;

const AccordionContent = styled.div`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--gray-100);
`;

const ContentInner = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const VenueInfo = styled.div``;

const InfoLabel = styled.span`
  display: block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 0.5rem;
`;

const VenueName = styled.h4`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  color: var(--navy);
  margin-bottom: 0.25rem;
  letter-spacing: 0.5px;
`;

const VenueAddress = styled.p`
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.5;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CircuitBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${props => circuitColors[props.$circuit]?.bg || 'var(--gray-500)'};
  color: ${props => circuitColors[props.$circuit]?.text || '#fff'};
  width: fit-content;
`;

const HotelLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--gold);
  color: var(--navy);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background: var(--navy);
    color: var(--gold);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const DetailsText = styled.p`
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.6;
  font-style: italic;
`;

const HeaderWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TournamentAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <AccordionContainer>
      {tournaments.map((tournament, index) => (
        <AccordionItem key={tournament.id} $index={index}>
          <HeaderWrapper>
            <AccordionHeader
              onClick={() => toggleAccordion(tournament.id)}
              $isOpen={openId === tournament.id}
            >
              <DateCell $isOpen={openId === tournament.id}>{tournament.date}</DateCell>
              <EventName $isOpen={openId === tournament.id}>{tournament.name}</EventName>
              <LocationWrapper>
                {tournament.circuit === 'NXTpro' && (
                  <CircuitLogo src={nxtproLogo} alt="NXTpro" />
                )}
                {tournament.circuit === 'HOOPSEEN' && (
                  <CircuitLogo src={hoopseenLogo} alt="HOOPSEEN" $light />
                )}
                {tournament.circuit === 'OTR' && (
                  <CircuitLogo src={otrLogo} alt="On The Radar" $light />
                )}
                <LocationCell $isOpen={openId === tournament.id}>
                  {tournament.city}, {tournament.state}
                </LocationCell>
              </LocationWrapper>
              <ExpandIcon $isOpen={openId === tournament.id}>▼</ExpandIcon>
            </AccordionHeader>
          </HeaderWrapper>
          <AccordionContent $isOpen={openId === tournament.id}>
            <ContentInner>
              <VenueInfo>
                <InfoLabel>Venue</InfoLabel>
                <VenueName>{tournament.venue.name}</VenueName>
                <VenueAddress>{tournament.venue.address}</VenueAddress>
              </VenueInfo>
              <DetailsSection>
                <CircuitBadge $circuit={tournament.circuit}>
                  {tournament.circuit}
                </CircuitBadge>
                {tournament.hotelLink && (
                  <HotelLink
                    href={tournament.hotelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Book Hotel
                  </HotelLink>
                )}
                {tournament.details && (
                  <DetailsText>{tournament.details}</DetailsText>
                )}
              </DetailsSection>
            </ContentInner>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default TournamentAccordion;
