import React from 'react';
import styled, { keyframes } from 'styled-components';
import TournamentAccordion from '../components/TournamentAccordion';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TravelContainer = styled.div`
  min-height: 100vh;
  background: var(--gray-100);
`;

const HeroSection = styled.section`
  background: var(--navy);
  padding: 4rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gold);
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const PageTagline = styled.span`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  animation: ${fadeInUp} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  color: var(--white);
  line-height: 0.95;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 0.6s ease-out 0.1s backwards;

  span {
    color: var(--gold);
  }
`;

const PageSubtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  margin-top: -2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const ScheduleContainer = styled.div`
  margin-bottom: 4rem;
`;

const ScheduleNote = styled.p`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-500);
  font-size: 0.95rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 3px solid var(--gold);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out backwards;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 31, 63, 0.1);
  }
`;

const InfoCardHeader = styled.div`
  background: var(--navy);
  padding: 1.25rem 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gold);
  }
`;

const InfoCardTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--gold);
  letter-spacing: 1px;
`;

const InfoCardBody = styled.div`
  padding: 1.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoListItem = styled.li`
  font-size: 0.95rem;
  color: var(--gray-700);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.85rem;
    width: 6px;
    height: 6px;
    background: var(--gold);
    border-radius: 50%;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-200);
  }
`;

const ContactText = styled.p`
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.7;

  strong {
    color: var(--navy);
    display: block;
    margin-bottom: 0.25rem;
  }

  a {
    color: var(--gold-dark);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--navy);
    }
  }
`;

const Travel = () => {
  return (
    <TravelContainer>
      <HeroSection>
        <HeroContent>
          <PageTagline>2026 Season</PageTagline>
          <PageTitle>
            TOURNAMENT <span>SCHEDULE</span>
          </PageTitle>
          <PageSubtitle>
            Follow the Wolves as we compete across the country in the Puma NXTpro circuit and beyond.
          </PageSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentWrapper>
          <ScheduleContainer>
            <ScheduleNote>
              Click on any tournament to view venue details and hotel booking information.
            </ScheduleNote>
            <TournamentAccordion />
          </ScheduleContainer>

          <InfoGrid>
            <InfoCard $delay="0.1s">
              <InfoCardHeader>
                <InfoCardTitle>TRAVEL GUIDELINES</InfoCardTitle>
              </InfoCardHeader>
              <InfoCardBody>
                <InfoList>
                  <InfoListItem>Book hotels as soon as information is provided</InfoListItem>
                  <InfoListItem>Stay at team hotels when possible</InfoListItem>
                  <InfoListItem>Arrive the day before tournament start</InfoListItem>
                  <InfoListItem>Plan for full day schedules</InfoListItem>
                </InfoList>
              </InfoCardBody>
            </InfoCard>

            <InfoCard $delay="0.2s">
              <InfoCardHeader>
                <InfoCardTitle>TRANSPORTATION</InfoCardTitle>
              </InfoCardHeader>
              <InfoCardBody>
                <InfoList>
                  <InfoListItem>Coordinate with team families for carpooling</InfoListItem>
                  <InfoListItem>Plan airport transfers for out-of-state tournaments</InfoListItem>
                  <InfoListItem>Allow extra time for traffic and venue location</InfoListItem>
                  <InfoListItem>Event Connect booking available for NXTpro events</InfoListItem>
                </InfoList>
              </InfoCardBody>
            </InfoCard>

            <InfoCard $delay="0.3s">
              <InfoCardHeader>
                <InfoCardTitle>CONTACT INFO</InfoCardTitle>
              </InfoCardHeader>
              <InfoCardBody>
                <ContactText>
                  <strong>Team Manager</strong>
                  Emma Snelgrove<br />
                  <a href="tel:5616855674">(561) 685-5674</a>
                </ContactText>
                <ContactText style={{ marginTop: '1rem' }}>
                  <strong>Travel Questions</strong>
                  <a href="mailto:troy1028@bellsouth.net">troy1028@bellsouth.net</a>
                </ContactText>
              </InfoCardBody>
            </InfoCard>
          </InfoGrid>
        </ContentWrapper>
      </ContentSection>
    </TravelContainer>
  );
};

export default Travel;
