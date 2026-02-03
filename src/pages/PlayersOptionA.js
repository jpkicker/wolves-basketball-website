// OPTION A: Players Page with Modal/Lightbox
// Click player card to open modal overlay

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { rosterEnhanced } from '../data/players-enhanced';
import PlayerModal from '../components/PlayerModal';

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

const PlayersContainer = styled.div`
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

const RosterSection = styled.section`
  padding: 4rem 2rem;
  margin-top: -2rem;
`;

const RosterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const RosterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const PlayerCard = styled.div`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out backwards;
  animation-delay: ${props => props.$index * 0.05}s;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 31, 63, 0.15);
  }
`;

const ClickHint = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold);
  color: var(--navy);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PlayerCard}:hover & {
    opacity: 1;
  }
`;

const PlayerImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 110%;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  overflow: hidden;
`;

const PlayerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${PlayerCard}:hover & img {
    transform: scale(1.05);
  }
`;

const PlayerInitial = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 5rem;
  color: var(--gold);
  opacity: 0.8;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const PlayerNumber = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: var(--gold);
  line-height: 1;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const PlayerInfo = styled.div`
  padding: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 3px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  ${PlayerCard}:hover &::before {
    transform: scaleX(1);
  }
`;

const PlayerName = styled.div`
  margin-bottom: 0.5rem;
`;

const PlayerFirstName = styled.span`
  display: block;
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PlayerLastName = styled.span`
  display: block;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--navy);
  line-height: 1;
  letter-spacing: 1px;
`;

const PlayerPosition = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  color: var(--gray-500);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PlayerSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-500);
  text-decoration: none;
  font-size: 0.85rem;
  font-family: 'Barlow', sans-serif;
  transition: all 0.3s ease;
  padding: 0.5rem 0.75rem;
  background: var(--gray-100);
  border-radius: 4px;

  &:hover {
    color: var(--navy);
    background: var(--gold);
  }

  svg {
    font-size: 1rem;
  }
`;

const TBDBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 215, 0, 0.15);
  color: var(--gold-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
`;

const PlayersOptionA = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleCardClick = (player, e) => {
    // Don't open modal if clicking on Instagram link
    if (e.target.closest('a')) return;
    setSelectedPlayer(player);
  };

  return (
    <PlayersContainer>
      <HeroSection>
        <HeroContent>
          <PageTagline>2026 Season</PageTagline>
          <PageTitle>
            THE <span>ROSTER</span>
          </PageTitle>
          <PageSubtitle>
            Meet the athletes who make up the Wellington Wolves 17U Elite squad. Click any player for full profile.
          </PageSubtitle>
        </HeroContent>
      </HeroSection>

      <RosterSection>
        <RosterContent>
          <RosterGrid>
            {rosterEnhanced.map((player, index) => (
              <PlayerCard
                key={player.id || player.number}
                $index={index}
                onClick={(e) => handleCardClick(player, e)}
              >
                <PlayerImageContainer>
                  <PlayerNumber>#{player.number}</PlayerNumber>
                  <PlayerImage>
                    {player.image ? (
                      <img
                        src={player.image}
                        alt={`${player.firstName} ${player.lastName}`}
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <PlayerInitial>{player.initial}</PlayerInitial>
                    )}
                  </PlayerImage>
                  <ClickHint>View Profile</ClickHint>
                </PlayerImageContainer>
                <PlayerInfo>
                  {player.firstName === 'TBD' ? (
                    <>
                      <PlayerName>
                        <PlayerLastName>TO BE ANNOUNCED</PlayerLastName>
                      </PlayerName>
                      <TBDBadge>Roster Spot Available</TBDBadge>
                    </>
                  ) : (
                    <>
                      <PlayerName>
                        <PlayerFirstName>{player.firstName}</PlayerFirstName>
                        <PlayerLastName>{player.lastName}</PlayerLastName>
                      </PlayerName>
                      <PlayerPosition>{player.position}</PlayerPosition>
                      {player.instagram && (
                        <PlayerSocial>
                          <SocialLink
                            href={`https://instagram.com/${player.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaInstagram />
                            @{player.instagram}
                          </SocialLink>
                        </PlayerSocial>
                      )}
                    </>
                  )}
                </PlayerInfo>
              </PlayerCard>
            ))}
          </RosterGrid>
        </RosterContent>
      </RosterSection>

      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </PlayersContainer>
  );
};

export default PlayersOptionA;
