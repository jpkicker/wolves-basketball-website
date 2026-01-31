import React from 'react';
import styled, { keyframes } from 'styled-components';
import teamImageUrl from 'url:../assets/07320183bb4a406ca62f47f55ffe22e8.jpeg';
import logoImgUrl from 'url:../assets/Wellington_Aug_2020_Design_Navy (1).jpg';

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

const AboutContainer = styled.div`
  min-height: 100vh;
  background: var(--white);
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
  padding: 5rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const MissionSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MissionContent = styled.div`
  animation: ${fadeInUp} 0.6s ease-out 0.3s backwards;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--navy);
  line-height: 1;
  margin-bottom: 1.5rem;
`;

const MissionText = styled.p`
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const MissionImage = styled.div`
  animation: ${fadeInUp} 0.6s ease-out 0.4s backwards;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 31, 63, 0.15);
  }
`;

const StaffSection = styled.div`
  margin-bottom: 6rem;
`;

const StaffHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StaffCard = styled.div`
  background: var(--gray-100);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${fadeInUp} 0.6s ease-out backwards;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 31, 63, 0.12);
  }
`;

const StaffCardHeader = styled.div`
  background: var(--navy);
  padding: 2rem;
  text-align: center;
  position: relative;

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

const StaffName = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const StaffRole = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`;

const StaffCardBody = styled.div`
  padding: 2rem;
`;

const StaffDescription = styled.p`
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.7;
`;

const ValuesSection = styled.div`
  background: var(--navy);
  padding: 5rem 2rem;
  margin: 0 -2rem;
  position: relative;

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

const ValuesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ValuesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ValuesTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--white);
  line-height: 1;

  span {
    color: var(--gold);
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
  animation: ${fadeInUp} 0.6s ease-out backwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: var(--gold);
  }
`;

const ValueTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--gold);
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
`;

const ValueDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <PageTagline>Who We Are</PageTagline>
          <PageTitle>
            ABOUT THE <span>WOLVES</span>
          </PageTitle>
          <PageSubtitle>
            Building champions on and off the court since 2020.
          </PageSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentWrapper>
          <MissionSection>
            <MissionContent>
              <SectionLabel>Our Mission</SectionLabel>
              <SectionTitle>DEVELOPING ELITE ATHLETES & OUTSTANDING YOUNG MEN</SectionTitle>
              <MissionText>
                The Wellington Wolves 17u Elite is a Puma NXTpro team dedicated to developing
                skilled basketball players and outstanding young men. We believe in a holistic
                approach to player development that emphasizes fundamental skills, basketball IQ,
                physical conditioning, and character development.
              </MissionText>
              <MissionText>
                Our program is designed to prepare players for high-level high school competition
                and college basketball while instilling values of teamwork, discipline, resilience,
                and sportsmanship.
              </MissionText>
            </MissionContent>
            <MissionImage>
              <img src={logoImgUrl} alt="Wellington Wolves Logo" />
            </MissionImage>
          </MissionSection>

          <StaffSection>
            <StaffHeader>
              <SectionLabel>Leadership</SectionLabel>
              <SectionTitle>COACHING STAFF</SectionTitle>
            </StaffHeader>
            <StaffGrid>
              <StaffCard $delay="0.1s">
                <StaffCardHeader>
                  <StaffName>ELIJAH BALCARCEL</StaffName>
                  <StaffRole>Head Coach</StaffRole>
                </StaffCardHeader>
                <StaffCardBody>
                  <StaffDescription>
                    Coach Balcarcel brings many years of coaching experience. His focus on
                    player development and team-oriented basketball has led to multiple championships.
                  </StaffDescription>
                </StaffCardBody>
              </StaffCard>

              <StaffCard $delay="0.2s">
                <StaffCardHeader>
                  <StaffName>JULIO BALCARCEL</StaffName>
                  <StaffRole>Assistant Coach</StaffRole>
                </StaffCardHeader>
                <StaffCardBody>
                  <StaffDescription>
                    Coach Julio specializes in offensive skill development and has trained
                    numerous players who have gone on to play at Division I universities.
                  </StaffDescription>
                </StaffCardBody>
              </StaffCard>

              <StaffCard $delay="0.3s">
                <StaffCardHeader>
                  <StaffName>JASON RANNEY</StaffName>
                  <StaffRole>Team Manager</StaffRole>
                </StaffCardHeader>
                <StaffCardBody>
                  <StaffDescription>
                    Jason coordinates all the travel logistics, tournament registration,
                    and team operations to keep the Wolves running smoothly.
                  </StaffDescription>
                </StaffCardBody>
              </StaffCard>
            </StaffGrid>
          </StaffSection>
        </ContentWrapper>
      </ContentSection>

      <ValuesSection>
        <ValuesWrapper>
          <ValuesHeader>
            <SectionLabel style={{ color: 'var(--gold)' }}>What We Stand For</SectionLabel>
            <ValuesTitle>OUR <span>VALUES</span></ValuesTitle>
          </ValuesHeader>
          <ValuesGrid>
            <ValueCard $delay="0.1s">
              <ValueIcon><span>E</span></ValueIcon>
              <ValueTitle>EXCELLENCE</ValueTitle>
              <ValueDescription>
                We pursue excellence in everything we do, from practice to competition
                to how we represent our team off the court.
              </ValueDescription>
            </ValueCard>

            <ValueCard $delay="0.2s">
              <ValueIcon><span>T</span></ValueIcon>
              <ValueTitle>TEAMWORK</ValueTitle>
              <ValueDescription>
                We put the team before individual accomplishments, knowing that collective
                success leads to individual growth.
              </ValueDescription>
            </ValueCard>

            <ValueCard $delay="0.3s">
              <ValueIcon><span>R</span></ValueIcon>
              <ValueTitle>RESILIENCE</ValueTitle>
              <ValueDescription>
                We develop mental toughness and the ability to overcome adversity,
                using challenges as opportunities for growth.
              </ValueDescription>
            </ValueCard>

            <ValueCard $delay="0.4s">
              <ValueIcon><span>L</span></ValueIcon>
              <ValueTitle>LEADERSHIP</ValueTitle>
              <ValueDescription>
                We encourage our players to be leaders on and off the court, taking
                responsibility and positively influencing others.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ValuesWrapper>
      </ValuesSection>
    </AboutContainer>
  );
};

export default About;
