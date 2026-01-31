import React from 'react';
import styled from 'styled-components';
import { announcements, formatDate, categoryColors } from '../data/announcements';

const AnnouncementsContainer = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  min-height: 60vh;
`;

const AnnouncementsContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #001f3f;
  margin-bottom: 3rem;
`;

const AnnouncementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AnnouncementCard = styled.article`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #ffd700;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CardDate = styled.time`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${props => categoryColors[props.$category]?.bg || '#616161'};
  color: ${props => categoryColors[props.$category]?.text || '#ffffff'};
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
  color: #001f3f;
  margin: 0 0 1rem 0;
  line-height: 1.3;
`;

const CardContent = styled.p`
  color: #444;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`;

const Announcements = () => {
  // Sort announcements by date (newest first)
  const sortedAnnouncements = [...announcements].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <AnnouncementsContainer>
      <AnnouncementsContent>
        <PageTitle>Team Announcements</PageTitle>
        {sortedAnnouncements.length > 0 ? (
          <AnnouncementsList>
            {sortedAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id}>
                <CardHeader>
                  <CardDate dateTime={announcement.date}>
                    {formatDate(announcement.date)}
                  </CardDate>
                  <CategoryBadge $category={announcement.category}>
                    {announcement.category}
                  </CategoryBadge>
                </CardHeader>
                <CardTitle>{announcement.title}</CardTitle>
                <CardContent>{announcement.content}</CardContent>
              </AnnouncementCard>
            ))}
          </AnnouncementsList>
        ) : (
          <EmptyState>
            <p>No announcements at this time. Check back soon!</p>
          </EmptyState>
        )}
      </AnnouncementsContent>
    </AnnouncementsContainer>
  );
};

export default Announcements;
