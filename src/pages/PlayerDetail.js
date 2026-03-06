// OPTION B: Separate Player Detail Page
// Each player has their own URL: /players/ethan-ranney

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft, FaInstagram, FaEnvelope, FaVideo, FaGraduationCap, FaSchool, FaShareAlt, FaQrcode, FaPlay } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { rosterEnhanced } from '../data/players-enhanced';
import { db } from '../firebase/config';
import { getThumbnailUrl } from '../utils/youtube';
import VideoModal from '../components/VideoModal';

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

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--gray-100);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  padding: 2rem 2rem 4rem;
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

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gold);
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.5s ease;

  &:hover {
    color: var(--white);
    transform: translateX(-5px);
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const PlayerImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 130%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${fadeInUp} 0.6s ease 0.1s backwards;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    max-width: 280px;
    margin: 0 auto;
    padding-top: 360px;
  }
`;

const PlayerNumber = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  color: var(--gold);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const PlayerInitial = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8rem;
  color: var(--gold);
  opacity: 0.8;
`;

const HeroInfo = styled.div`
  color: var(--white);
  animation: ${fadeInUp} 0.6s ease 0.2s backwards;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

const PlayerName = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1;
  margin-bottom: 0.5rem;

  span {
    color: var(--gold);
  }
`;

const PlayerPosition = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: var(--gold);
  margin-bottom: 2rem;
`;

const QuickStatsRow = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const QuickStat = styled.div`
  text-align: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-width: 80px;

  .value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    color: var(--white);
  }

  .label {
    font-family: 'Barlow', sans-serif;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.$primary ? 'var(--gold)' : 'transparent'};
  color: ${props => props.$primary ? 'var(--navy)' : 'var(--white)'};
  border: 2px solid ${props => props.$primary ? 'var(--gold)' : 'rgba(255,255,255,0.3)'};
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.$primary ? 'var(--white)' : 'rgba(255,255,255,0.1)'};
    transform: translateY(-2px);
  }
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div``;

const Card = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${fadeInUp} 0.6s ease backwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

const SectionTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: var(--gold);
  }

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin-left: 0.5rem;
  }
`;

const Bio = styled.p`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-700);
  line-height: 1.9;
  font-size: 1.05rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatBox = styled.div`
  background: var(--gray-100);
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  border-left: 4px solid var(--gold);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .value {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    color: var(--navy);
    line-height: 1;
  }

  .label {
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.25rem;
  }
`;

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HighlightLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--gray-100);
  border-radius: 10px;
  text-decoration: none;
  color: var(--navy);
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    transform: translateX(5px);
  }

  svg {
    color: var(--gold);
    font-size: 1.25rem;
  }

  &:hover svg {
    color: var(--navy);
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--gray-200);

  svg {
    color: var(--gold);
    font-size: 1.1rem;
    width: 20px;
  }

  a {
    color: var(--navy);
    text-decoration: none;

    &:hover {
      color: var(--gold);
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: var(--navy);
  color: var(--gold);
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold);
    color: var(--navy);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 31, 63, 0.3);
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    color: var(--navy);
    margin-bottom: 1rem;
  }

  p {
    color: var(--gray-500);
    margin-bottom: 2rem;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--gold);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background: var(--gray-200);
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    color: var(--white);
    font-size: 1.5rem;
    margin-left: 3px; /* Optical alignment */
  }

  ${HighlightCard}:hover & {
    background: var(--gold);
    
    svg {
      color: var(--navy);
    }
  }
`;

const VideoInfo = styled.div`
  padding: 1.25rem;
  
  h4 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.1rem;
    color: var(--navy);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  
  p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.9rem;
    color: var(--gray-600);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const NoHighlights = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: var(--gray-500);
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  h4 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: 'Barlow', sans-serif;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid var(--gray-300);
    border-top: 3px solid var(--gold);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const QROverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const QRModal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const QRTitle = styled.h3`
  color: #001F3F;
  margin: 0 0 0.25rem 0;
  font-size: 1.3rem;
`;

const QRSubtitle = styled.p`
  color: #666;
  font-size: 0.85rem;
  margin: 0 0 1.25rem 0;
`;

const QRUrl = styled.p`
  color: #999;
  font-size: 0.7rem;
  word-break: break-all;
  margin: 1rem 0 0.5rem 0;
`;

const QRCloseBtn = styled.button`
  background: #001F3F;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 2rem;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 0.5rem;
  &:hover {
    background: #003366;
  }
`;

const PlayerDetail = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [highlights, setHighlights] = useState([]);
  const [highlightsLoading, setHighlightsLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const player = rosterEnhanced.find(p => p.id === playerId);

  // Fetch highlights from Firestore
  useEffect(() => {
    const fetchHighlights = async () => {
      if (!player || !db) {
        setHighlightsLoading(false);
        return;
      }
      
      try {
        const highlightsQuery = query(
          collection(db, 'highlights'),
          where('playerId', '==', playerId),
          where('approved', '==', true)
        );
        
        const querySnapshot = await getDocs(highlightsQuery);
        const highlightsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Sort client-side to avoid needing composite index
        highlightsData.sort((a, b) => {
          const aTime = a.submittedAt?.seconds || 0;
          const bTime = b.submittedAt?.seconds || 0;
          return bTime - aTime;
        });
        
        setHighlights(highlightsData);
      } catch (error) {
        console.error('Error fetching highlights:', error);
        setHighlights([]);
      } finally {
        setHighlightsLoading(false);
      }
    };

    fetchHighlights();
  }, [playerId, player]);

  const [showQR, setShowQR] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${player.firstName} ${player.lastName} - Wellington Wolves`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  if (!player) {
    return (
      <PageContainer>
        <NotFound>
          <h2>Player Not Found</h2>
          <p>Sorry, we couldn't find that player.</p>
          <ActionButton as={Link} to="/players" $primary>
            <FaArrowLeft /> Back to Roster
          </ActionButton>
        </NotFound>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <BackLink to="/players">
            <FaArrowLeft /> Back to Roster
          </BackLink>

          <HeroGrid>
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

              <QuickStatsRow>
                {player.height && (
                  <QuickStat>
                    <div className="value">{player.height}</div>
                    <div className="label">Height</div>
                  </QuickStat>
                )}
                {player.weight && (
                  <QuickStat>
                    <div className="value">{player.weight}</div>
                    <div className="label">Weight</div>
                  </QuickStat>
                )}
                {player.gradYear && (
                  <QuickStat>
                    <div className="value">{player.gradYear}</div>
                    <div className="label">Class</div>
                  </QuickStat>
                )}
                {player.gpa && (
                  <QuickStat>
                    <div className="value">{player.gpa}</div>
                    <div className="label">GPA</div>
                  </QuickStat>
                )}
              </QuickStatsRow>

              <ActionButtons>
                {player.recruiting?.email && (
                  <ActionButton
                    href={`mailto:${player.recruiting.email}?subject=Recruiting Inquiry - ${player.firstName} ${player.lastName}`}
                    $primary
                  >
                    <FaEnvelope /> Contact for Recruiting
                  </ActionButton>
                )}
                <ActionButton as="button" onClick={handleShare}>
                  <FaShareAlt /> Share Profile
                </ActionButton>
                <ActionButton as="button" onClick={() => setShowQR(true)}>
                  <FaQrcode /> Share QR Code
                </ActionButton>
              </ActionButtons>
            </HeroInfo>
          </HeroGrid>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MainContent>
          {player.bio && (
            <Card $delay="0.3s">
              <SectionTitle>About</SectionTitle>
              <Bio>{player.bio}</Bio>
            </Card>
          )}

          {player.stats && (
            <Card $delay="0.4s">
              <SectionTitle>Season Statistics ({player.stats.season})</SectionTitle>
              <StatsGrid>
                {player.stats.gp && (
                  <StatBox>
                    <div className="value">{player.stats.gp}</div>
                    <div className="label">Games</div>
                  </StatBox>
                )}
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
                {player.stats.bpg !== undefined && (
                  <StatBox>
                    <div className="value">{player.stats.bpg}</div>
                    <div className="label">BPG</div>
                  </StatBox>
                )}
                <StatBox>
                  <div className="value">{player.stats.fgPct}%</div>
                  <div className="label">FG%</div>
                </StatBox>
                <StatBox>
                  <div className="value">{player.stats.threePct}%</div>
                  <div className="label">3PT%</div>
                </StatBox>
                {player.stats.ftPct && (
                  <StatBox>
                    <div className="value">{player.stats.ftPct}%</div>
                    <div className="label">FT%</div>
                  </StatBox>
                )}
              </StatsGrid>
            </Card>
          )}

          <Card $delay="0.5s">
            <SectionTitle>
              <FaVideo /> Highlights
            </SectionTitle>
            {highlightsLoading ? (
              <LoadingSpinner />
            ) : highlights.length > 0 ? (
              <HighlightsGrid>
                {highlights.map((video) => (
                  <HighlightCard
                    key={video.id}
                    onClick={() => handleVideoClick(video)}
                  >
                    <VideoThumbnail>
                      <img
                        src={getThumbnailUrl(video.youtubeVideoId)}
                        alt={video.title}
                      />
                      <PlayButton>
                        <FaPlay />
                      </PlayButton>
                    </VideoThumbnail>
                    <VideoInfo>
                      <h4>{video.title}</h4>
                      {video.description && <p>{video.description}</p>}
                    </VideoInfo>
                  </HighlightCard>
                ))}
              </HighlightsGrid>
            ) : (
              <NoHighlights>
                <FaVideo />
                <h4>No highlights yet</h4>
                <p>Check back later for video highlights!</p>
              </NoHighlights>
            )}
          </Card>
        </MainContent>

        <Sidebar>
          <Card $delay="0.4s">
            <SectionTitle>
              <FaGraduationCap /> Recruiting Info
            </SectionTitle>
            <InfoList>
              {player.school && (
                <InfoItem>
                  <FaSchool />
                  <span>{player.school}</span>
                </InfoItem>
              )}
              {player.gradYear && (
                <InfoItem>
                  <FaGraduationCap />
                  <span>Class of {player.gradYear}</span>
                </InfoItem>
              )}
              {player.instagram && (
                <InfoItem>
                  <FaInstagram />
                  <a
                    href={`https://instagram.com/${player.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{player.instagram}
                  </a>
                </InfoItem>
              )}
              {player.recruiting?.hudl && (
                <InfoItem>
                  <FaVideo />
                  <a
                    href={player.recruiting.hudl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Hudl Profile
                  </a>
                </InfoItem>
              )}
            </InfoList>

            {player.recruiting?.email && (
              <ContactButton
                href={`mailto:${player.recruiting.email}?subject=Recruiting Inquiry - ${player.firstName} ${player.lastName}`}
              >
                <FaEnvelope /> Contact Coach
              </ContactButton>
            )}
          </Card>
        </Sidebar>
      </ContentSection>
      
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeVideoModal} />
      )}
      {showQR && (
        <QROverlay onClick={() => setShowQR(false)}>
          <QRModal onClick={(e) => e.stopPropagation()}>
            <QRTitle>{player.firstName} {player.lastName}</QRTitle>
            <QRSubtitle>Scan to view player profile</QRSubtitle>
            <QRCodeSVG
              value={window.location.href}
              size={220}
              bgColor="#ffffff"
              fgColor="#001F3F"
              level="M"
              includeMargin={true}
            />
            <QRUrl>{window.location.href}</QRUrl>
            <QRCloseBtn onClick={() => setShowQR(false)}>Close</QRCloseBtn>
          </QRModal>
        </QROverlay>
      )}
    </PageContainer>
  );
};

export default PlayerDetail;
