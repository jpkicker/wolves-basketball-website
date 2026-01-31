import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import teamImageUrl from 'url:../assets/07320183bb4a406ca62f47f55ffe22e8.jpeg';
import AnnouncementPreview from '../components/AnnouncementPreview';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 21, 41, 0.75) 0%,
      rgba(0, 31, 63, 0.6) 40%,
      rgba(0, 31, 63, 0.45) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, var(--white) 0%, transparent 100%);
    z-index: 2;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${teamImageUrl});
  background-size: cover;
  background-position: center center;
  animation: ${scaleIn} 1.2s ease-out;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-bottom: 100px;
`;

const HeroTagline = styled.span`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.2s forwards;

  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 2px;
    background: var(--gold);
    margin-right: 1rem;
    vertical-align: middle;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: 0.9;
  color: var(--white);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.4s forwards;

  span {
    display: block;
    color: var(--gold);
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.6s forwards;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out 0.8s forwards;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--gold);
  color: var(--navy);
  padding: 1rem 2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  color: var(--white);
  padding: 1rem 2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--gold);
    color: var(--gold);
    transform: translateY(-3px);
  }
`;

const StatsBar = styled.div`
  position: relative;
  z-index: 5;
  background: var(--navy);
  margin-top: -80px;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -60px;
  }
`;

const StatsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  padding: 2rem;
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StatNumber = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.$dark ? 'var(--navy)' : 'var(--white)'};
  position: relative;
  overflow: hidden;
`;

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 4rem;
  ${props => props.$center && 'text-align: center;'}
`;

const SectionTagline = styled.span`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${props => props.$light ? 'var(--white)' : 'var(--navy)'};
  line-height: 1;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: var(--gray-100);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: var(--gold);
    transition: height 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      height: 100%;
    }
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--gold);
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--navy);
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--gray-700);
  line-height: 1.7;
`;

const CTASection = styled.section`
  background: var(--navy);
  padding: 6rem 2rem;
  text-align: center;
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
      radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--white);
  margin-bottom: 1.5rem;
  line-height: 1;

  span {
    color: var(--gold);
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroImage />
        <HeroContent>
          <HeroTagline>Puma NXTpro Team</HeroTagline>
          <HeroTitle>
            WELLINGTON
            <span>WOLVES</span>
          </HeroTitle>
          <HeroSubtitle>
            Building champions on and off the court. Elite 17U basketball
            competing at the highest level across the nation.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton to="/players">
              Meet the Team
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </PrimaryButton>
            <SecondaryButton to="/travel">
              View Schedule
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <StatsBar>
        <StatsContent>
          <StatItem>
            <StatNumber>17U</StatNumber>
            <StatLabel>Age Division</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>13</StatNumber>
            <StatLabel>Tournaments</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>10</StatNumber>
            <StatLabel>Players</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>2026</StatNumber>
            <StatLabel>Season</StatLabel>
          </StatItem>
        </StatsContent>
      </StatsBar>

      <SectionContainer>
        <SectionInner>
          <SectionHeader $center>
            <SectionTagline>What We Offer</SectionTagline>
            <SectionTitle>THE WOLVES WAY</SectionTitle>
          </SectionHeader>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>ELITE TRAINING</FeatureTitle>
              <FeatureDescription>
                Professional-level training programs designed to develop skilled
                and disciplined basketball players ready for the next level.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>COMPETITIVE PLAY</FeatureTitle>
              <FeatureDescription>
                We compete in top tournaments throughout Florida and the nation,
                testing our skills against the best competition available.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </FeatureIcon>
              <FeatureTitle>CHARACTER BUILDING</FeatureTitle>
              <FeatureDescription>
                Beyond basketball, we focus on building character, leadership,
                and life skills that benefit our players throughout their lives.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </SectionInner>
      </SectionContainer>

      <AnnouncementPreview />

      <CTASection>
        <CTAContent>
          <CTATitle>
            READY TO RUN <span>WITH THE PACK?</span>
          </CTATitle>
          <CTAText>
            Follow our journey as we compete across the country in the 2026 Puma NXTpro circuit.
          </CTAText>
          <PrimaryButton to="/about">
            Learn More About Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </PrimaryButton>
        </CTAContent>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;
