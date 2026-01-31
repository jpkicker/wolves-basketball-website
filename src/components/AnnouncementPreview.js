import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { announcements, formatDate, categoryColors } from '../data/announcements';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PreviewContainer = styled.section`
  padding: 6rem 2rem;
  background: var(--gray-100);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gray-300), transparent);
  }
`;

const PreviewContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderLeft = styled.div``;

const SectionTagline = styled.span`
  display: inline-block;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--navy);
  line-height: 1;
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--navy);
  text-decoration: none;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--navy);
  transition: all 0.3s ease;

  &:hover {
    background: var(--navy);
    color: var(--gold);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const AnnouncementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AnnouncementCard = styled.article`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 0.6s ease-out backwards;
  animation-delay: ${props => props.$index * 0.1}s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 31, 63, 0.12);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardDate = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  color: var(--gray-500);
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${props => categoryColors[props.$category]?.bg || 'var(--gray-500)'};
  color: ${props => categoryColors[props.$category]?.text || '#ffffff'};
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 0.75rem;
  line-height: 1.1;
  letter-spacing: 0.5px;
`;

const CardContent = styled.p`
  color: var(--gray-700);
  font-size: 0.95rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem;
  margin-top: auto;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gold-dark);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--navy);

    svg {
      transform: translateX(4px);
    }
  }
`;

const AnnouncementPreview = () => {
  const recentAnnouncements = [...announcements]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <PreviewContainer>
      <PreviewContent>
        <SectionHeader>
          <HeaderLeft>
            <SectionTagline>Latest Updates</SectionTagline>
            <SectionTitle>TEAM NEWS</SectionTitle>
          </HeaderLeft>
          <ViewAllLink to="/announcements">
            View All
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </ViewAllLink>
        </SectionHeader>
        <AnnouncementsGrid>
          {recentAnnouncements.map((announcement, index) => (
            <AnnouncementCard key={announcement.id} $index={index}>
              <CardHeader>
                <CardDate>{formatDate(announcement.date)}</CardDate>
                <CategoryBadge $category={announcement.category}>
                  {announcement.category}
                </CategoryBadge>
              </CardHeader>
              <CardBody>
                <CardTitle>{announcement.title}</CardTitle>
                <CardContent>{announcement.content}</CardContent>
              </CardBody>
            </AnnouncementCard>
          ))}
        </AnnouncementsGrid>
      </PreviewContent>
    </PreviewContainer>
  );
};

export default AnnouncementPreview;
