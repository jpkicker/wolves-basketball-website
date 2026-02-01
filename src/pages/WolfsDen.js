import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Password for the Wolf's Den (simple client-side protection)
const PACK_PASSWORD = 'wolves 2026';

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

const DenContainer = styled.div`
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
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--navy);
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-size: 1.5rem;
  }
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const ResourceCard = styled.a`
  background: var(--white);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  animation: ${fadeInUp} 0.6s ease-out backwards;
  animation-delay: ${props => props.$delay || '0s'};
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 31, 63, 0.12);
    border-color: var(--gold);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${props => props.$bg || 'var(--navy)'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.$color || 'var(--gold)'};
  }
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  color: var(--navy);
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
`;

const CardDescription = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.5;
  margin: 0;
`;

const CardBadge = styled.span`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--white);
  background: ${props => props.$color || 'var(--gold-dark)'};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: var(--gray-200);
  margin: 2rem 0 3rem;
`;

const ContactCard = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ContactItem = styled.div`
  h4 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    color: var(--gold-dark);
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    color: var(--gray-700);
    margin: 0.25rem 0;

    a {
      color: var(--navy);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--gold-dark);
      }
    }
  }
`;

// Icons as components
const RegisterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <line x1="20" y1="8" x2="20" y2="14"/>
    <line x1="23" y1="11" x2="17" y2="11"/>
  </svg>
);

const FormIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// Password Gate Components
const GateContainer = styled.div`
  min-height: 100vh;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const GateCard = styled.div`
  background: var(--white);
  border-radius: 16px;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${fadeInUp} 0.6s ease-out;
`;

const GateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const GateTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--navy);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const GateSubtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 0.95rem;
  color: var(--gray-500);
  margin-bottom: 2rem;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &::placeholder {
    color: var(--gray-400);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 2px;
  background: var(--navy);
  color: var(--gold);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-2px);
  }
`;

const ErrorMessage = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  color: #e51b24;
  margin-top: 1rem;
`;

const WolfsDen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem('wolfsDenAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === PACK_PASSWORD.toLowerCase()) {
      localStorage.setItem('wolfsDenAuth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <GateContainer>
        <GateCard>
          <GateIcon>🐺</GateIcon>
          <GateTitle>WOLF'S DEN</GateTitle>
          <GateSubtitle>This area is for team members only.<br />Enter the password to continue.</GateSubtitle>
          <form onSubmit={handleSubmit}>
            <PasswordInput
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <SubmitButton type="submit">ENTER THE DEN</SubmitButton>
          </form>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </GateCard>
      </GateContainer>
    );
  }

  return (
    <DenContainer>
      <HeroSection>
        <HeroContent>
          <PageTagline>Team Resources</PageTagline>
          <PageTitle>
            WOLF'S <span>DEN</span>
          </PageTitle>
          <PageSubtitle>
            Everything you need in one place — registration, forms, documents, and important links.
          </PageSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentWrapper>
          {/* Registration Section */}
          <SectionTitle><span>📝</span> REGISTRATION</SectionTitle>
          <ResourceGrid>
            <ResourceCard 
              href="https://app.eventconnect.io/s/25IYAfMe" 
              target="_blank" 
              rel="noopener noreferrer"
              $delay="0.1s"
            >
              <IconWrapper $bg="var(--navy)">
                <RegisterIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>2026 SEASON REGISTRATION</CardTitle>
                <CardDescription>
                  Register your player for the 2026 Wellington Wolves season via EventConnect.
                </CardDescription>
                <CardBadge $color="#e51b24">Required</CardBadge>
              </CardContent>
            </ResourceCard>
          </ResourceGrid>

          <Divider />

          {/* Forms & Documents Section */}
          <SectionTitle><span>📄</span> FORMS & DOCUMENTS</SectionTitle>
          <ResourceGrid>
            <ResourceCard 
              href="#" 
              $delay="0.1s"
              onClick={(e) => e.preventDefault()}
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              <IconWrapper $bg="var(--gray-400)">
                <FormIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>PLAYER WAIVER</CardTitle>
                <CardDescription>
                  Required liability waiver for all players.
                </CardDescription>
                <CardBadge $color="var(--gray-500)">Coming Soon</CardBadge>
              </CardContent>
            </ResourceCard>

            <ResourceCard 
              href="#" 
              $delay="0.2s"
              onClick={(e) => e.preventDefault()}
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              <IconWrapper $bg="var(--gray-400)">
                <DownloadIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>MEDICAL RELEASE FORM</CardTitle>
                <CardDescription>
                  Emergency contact and medical information form.
                </CardDescription>
                <CardBadge $color="var(--gray-500)">Coming Soon</CardBadge>
              </CardContent>
            </ResourceCard>
          </ResourceGrid>

          <Divider />

          {/* Fundraising Section */}
          <SectionTitle><span>💰</span> FUNDRAISING</SectionTitle>
          <ResourceGrid>
            <ResourceCard 
              href="#" 
              $delay="0.1s"
              onClick={(e) => e.preventDefault()}
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              <IconWrapper $bg="var(--gray-400)">
                <DollarIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>BANNER SPONSORSHIP APPLICATION</CardTitle>
                <CardDescription>
                  Support the team! Sponsor a banner displayed at our home games.
                </CardDescription>
                <CardBadge $color="var(--gray-500)">Coming Soon</CardBadge>
              </CardContent>
            </ResourceCard>
          </ResourceGrid>

          <Divider />

          {/* Important Links Section */}
          <SectionTitle><span>🔗</span> IMPORTANT LINKS</SectionTitle>
          <ResourceGrid>
            <ResourceCard 
              href="https://eventconnect.io" 
              target="_blank" 
              rel="noopener noreferrer"
              $delay="0.1s"
            >
              <IconWrapper $bg="#1a73e8">
                <LinkIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>EVENTCONNECT</CardTitle>
                <CardDescription>
                  Tournament registration and hotel booking for NXTpro events.
                </CardDescription>
              </CardContent>
            </ResourceCard>

            <ResourceCard 
              href="https://www.nxtprohoops.com" 
              target="_blank" 
              rel="noopener noreferrer"
              $delay="0.2s"
            >
              <IconWrapper $bg="#000000">
                <LinkIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>PUMA NXTPRO</CardTitle>
                <CardDescription>
                  Official Puma NXTpro circuit website for schedules and standings.
                </CardDescription>
              </CardContent>
            </ResourceCard>

            <ResourceCard 
              href="https://hoopseen.com" 
              target="_blank" 
              rel="noopener noreferrer"
              $delay="0.3s"
            >
              <IconWrapper $bg="#1E3A5F">
                <LinkIcon />
              </IconWrapper>
              <CardContent>
                <CardTitle>HOOPSEEN</CardTitle>
                <CardDescription>
                  HOOPSEEN tournament information and team rankings.
                </CardDescription>
              </CardContent>
            </ResourceCard>
          </ResourceGrid>

          <Divider />

          {/* Contact Section */}
          <SectionTitle><span>📞</span> TEAM CONTACTS</SectionTitle>
          <ContactCard>
            <ContactGrid>
              <ContactItem>
                <h4>Team Manager</h4>
                <p><strong>Jason Ranney</strong></p>
                <p><a href="tel:5614515880">(561) 451-5880</a></p>
                <p><a href="mailto:jpkicker@gmail.com">jpkicker@gmail.com</a></p>
              </ContactItem>
              <ContactItem>
                <h4>Head Coach</h4>
                <p><strong>Elijah Balcarcel</strong></p>
                <p><a href="tel:5613096242">(561) 309-6242</a></p>
                <p><a href="mailto:elijahbalcarcel2@gmail.com">elijahbalcarcel2@gmail.com</a></p>
              </ContactItem>
              <ContactItem>
                <h4>Assistant Coach</h4>
                <p><strong>Julio Balcarcel</strong></p>
                <p><a href="tel:5613243724">(561) 324-3724</a></p>
                <p><a href="mailto:jula16@bellsouth.net">jula16@bellsouth.net</a></p>
              </ContactItem>
              <ContactItem>
                <h4>Team Parent</h4>
                <p><strong>Emma Snelgrove</strong></p>
                <p><a href="tel:5616855674">(561) 685-5674</a></p>
                <p><a href="mailto:troy1028@bellsouth.net">troy1028@bellsouth.net</a></p>
              </ContactItem>
            </ContactGrid>
          </ContactCard>

        </ContentWrapper>
      </ContentSection>
    </DenContainer>
  );
};

export default WolfsDen;
