// OPTION A: Lightbox/Modal Player Profile
// Opens a modal overlay on the same page

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes, FaInstagram, FaEnvelope, FaVideo, FaGraduationCap, FaSchool } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 15, 31, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  background: var(--white);
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${slideUp} 0.4s ease;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-height: 95vh;
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--navy);
  color: var(--white);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: rotate(90deg);
  }
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  border-radius: 16px 16px 0 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const PlayerImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 120%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
    padding-top: 240px;
  }
`;

const PlayerNumber = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  color: var(--gold);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const PlayerInitial = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 6rem;
  color: var(--gold);
  opacity: 0.8;
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
`;

const PlayerName = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0.5rem;

  span {
    color: var(--gold);
  }
`;

const PlayerPosition = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--gold);
  margin-bottom: 1.5rem;
`;

const QuickStats = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const QuickStat = styled.div`
  text-align: center;

  span {
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    color: var(--white);
  }

  small {
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const ContentSection = styled.div`
  padding: 2rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: var(--gold);
    margin-left: 1rem;
  }
`;

const Bio = styled.p`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatBox = styled.div`
  background: var(--gray-100);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border-left: 3px solid var(--gold);

  .value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: var(--navy);
  }

  .label {
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const HighlightLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--gray-100);
  border-radius: 8px;
  text-decoration: none;
  color: var(--navy);
  font-family: 'Barlow', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
  }

  svg {
    color: var(--gold);
  }

  &:hover svg {
    color: var(--navy);
  }
`;

const RecruitingSection = styled.div`
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  padding: 1.5rem;
  border-radius: 12px;
  color: var(--white);
`;

const RecruitingTitle = styled.h4`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  color: var(--gold);
  margin-bottom: 1rem;
`;

const RecruitingInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const RecruitingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--gold);
  }

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--gold);
    }
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--gold);
  color: var(--navy);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 6px;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--white);
    transform: translateY(-2px);
  }
`;

const PlayerModal = ({ player, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!player) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>

        <HeroSection>
          <PlayerImageWrapper>
            <PlayerNumber>#{player.number}</PlayerNumber>
            {player.image ? (
              <img src={player.image} alt={`${player.firstName} ${player.lastName}`} />
            ) : (
              <PlayerInitial>{player.initial}</PlayerInitial>
            )}
          </PlayerImageWrapper>

          <HeroInfo>
            <PlayerName>
              {player.firstName} <span>{player.lastName}</span>
            </PlayerName>
            <PlayerPosition>{player.position}</PlayerPosition>

            <QuickStats>
              {player.height && (
                <QuickStat>
                  <span>{player.height}</span>
                  <small>Height</small>
                </QuickStat>
              )}
              {player.weight && (
                <QuickStat>
                  <span>{player.weight}</span>
                  <small>Weight</small>
                </QuickStat>
              )}
              {player.gradYear && (
                <QuickStat>
                  <span>{player.gradYear}</span>
                  <small>Class</small>
                </QuickStat>
              )}
              {player.gpa && (
                <QuickStat>
                  <span>{player.gpa}</span>
                  <small>GPA</small>
                </QuickStat>
              )}
            </QuickStats>
          </HeroInfo>
        </HeroSection>

        <ContentSection>
          {player.bio && (
            <>
              <SectionTitle>About</SectionTitle>
              <Bio>{player.bio}</Bio>
            </>
          )}

          {player.stats && (
            <>
              <SectionTitle>Season Stats ({player.stats.season})</SectionTitle>
              <StatsGrid>
                <StatBox>
                  <div className="value">{player.stats.ppg}</div>
                  <div className="label">PPG</div>
                </StatBox>
                <StatBox>
                  <div className="value">{player.stats.rpg}</div>
                  <div className="label">RPG</div>
                </StatBox>
                <StatBox>
                  <div className="value">{player.stats.apg}</div>
                  <div className="label">APG</div>
                </StatBox>
                <StatBox>
                  <div className="value">{player.stats.spg}</div>
                  <div className="label">SPG</div>
                </StatBox>
                <StatBox>
                  <div className="value">{player.stats.fgPct}%</div>
                  <div className="label">FG%</div>
                </StatBox>
                <StatBox>
                  <div className="value">{player.stats.threePct}%</div>
                  <div className="label">3PT%</div>
                </StatBox>
              </StatsGrid>
            </>
          )}

          {player.highlights && player.highlights.length > 0 && (
            <>
              <SectionTitle>Highlights</SectionTitle>
              <HighlightsList>
                {player.highlights.map((video, index) => (
                  <HighlightLink
                    key={index}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaVideo />
                    {video.title}
                  </HighlightLink>
                ))}
              </HighlightsList>
            </>
          )}

          <RecruitingSection>
            <RecruitingTitle>
              <FaGraduationCap /> Recruiting Information
            </RecruitingTitle>
            <RecruitingInfo>
              {player.school && (
                <RecruitingItem>
                  <FaSchool />
                  <span>{player.school}</span>
                </RecruitingItem>
              )}
              {player.instagram && (
                <RecruitingItem>
                  <FaInstagram />
                  <a
                    href={`https://instagram.com/${player.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{player.instagram}
                  </a>
                </RecruitingItem>
              )}
              {player.recruiting?.hudl && (
                <RecruitingItem>
                  <FaVideo />
                  <a
                    href={player.recruiting.hudl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hudl Profile
                  </a>
                </RecruitingItem>
              )}
            </RecruitingInfo>
            {player.recruiting?.email && (
              <ContactButton href={`mailto:${player.recruiting.email}?subject=Recruiting Inquiry - ${player.firstName} ${player.lastName}`}>
                <FaEnvelope />
                Contact for Recruiting
              </ContactButton>
            )}
          </RecruitingSection>
        </ContentSection>
      </ModalContainer>
    </Overlay>
  );
};

export default PlayerModal;
