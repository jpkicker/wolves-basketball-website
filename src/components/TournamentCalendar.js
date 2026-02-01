import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { tournaments, circuitColors } from '../data/schedule2026';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const modalFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const CalendarContainer = styled.div`
  animation: ${fadeIn} 0.4s ease-out;
`;

const MonthSection = styled.div`
  margin-bottom: 2rem;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

const MonthHeader = styled.div`
  background: var(--navy);
  padding: 1rem 1.5rem;
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

const MonthTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--white);
  letter-spacing: 2px;
  margin: 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const DayHeader = styled.div`
  background: var(--gray-100);
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-200);

  @media (max-width: 768px) {
    padding: 0.5rem 0.25rem;
    font-size: 0.65rem;
  }
`;

const DayCell = styled.div`
  min-height: 80px;
  padding: 0.5rem;
  border-right: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
  background: ${props => props.$isCurrentMonth ? 'var(--white)' : 'var(--gray-50)'};
  position: relative;

  &:nth-child(7n) {
    border-right: none;
  }

  @media (max-width: 768px) {
    min-height: 60px;
    padding: 0.25rem;
  }
`;

const DayNumber = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => props.$isCurrentMonth ? 'var(--gray-700)' : 'var(--gray-400)'};

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const EventBadge = styled.div`
  margin-top: 0.25rem;
  padding: 0.25rem 0.4rem;
  border-radius: 4px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${props => circuitColors[props.$circuit]?.bg || 'var(--navy)'};
  color: ${props => circuitColors[props.$circuit]?.text || '#fff'};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  line-height: 1.2;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 0.55rem;
    padding: 0.2rem 0.3rem;
  }
`;

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--gray-50);
  border-top: 1px solid var(--gray-200);
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${props => props.$color};
`;

const LegendLabel = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 0.8rem;
  color: var(--gray-600);
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 31, 63, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: var(--white);
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${modalFadeIn} 0.3s ease-out;
`;

const ModalHeader = styled.div`
  background: var(--navy);
  padding: 1.5rem;
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

const ModalTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
  color: var(--white);
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
`;

const ModalDate = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 1px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const InfoSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

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

const InfoText = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  color: var(--gray-700);
  margin: 0;
  line-height: 1.5;
`;

const VenueName = styled.h4`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  color: var(--navy);
  margin: 0 0 0.25rem 0;
  letter-spacing: 0.5px;
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
  margin-top: 1rem;

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
  margin: 0;
`;

// Helper functions
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const parseDate = (dateStr) => {
  const parts = dateStr.split(' - ');
  const start = parts[0].split('/');
  const end = parts[1].split('/');
  return {
    startMonth: parseInt(start[0]) - 1,
    startDay: parseInt(start[1]),
    endMonth: parseInt(end[0]) - 1,
    endDay: parseInt(end[1])
  };
};

const getEventsForDay = (month, day, tournamentList) => {
  return tournamentList.filter(t => {
    const { startMonth, startDay, endMonth, endDay } = parseDate(t.date);
    
    if (startMonth === endMonth) {
      return month === startMonth && day >= startDay && day <= endDay;
    }
    
    if (month === startMonth) {
      return day >= startDay;
    }
    if (month === endMonth) {
      return day <= endDay;
    }
    
    return false;
  });
};

const TournamentCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const year = 2026;
  const months = [
    { name: 'MARCH', num: 2 },
    { name: 'APRIL', num: 3 },
    { name: 'MAY', num: 4 },
    { name: 'JUNE', num: 5 },
    { name: 'JULY', num: 6 }
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const renderMonth = (monthName, monthNum) => {
    const daysInMonth = getDaysInMonth(year, monthNum);
    const firstDay = getFirstDayOfMonth(year, monthNum);
    const cells = [];
    
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <DayCell key={`empty-${i}`} $isCurrentMonth={false}>
          <DayNumber $isCurrentMonth={false}></DayNumber>
        </DayCell>
      );
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDay(monthNum, day, tournaments);
      cells.push(
        <DayCell key={day} $isCurrentMonth={true}>
          <DayNumber $isCurrentMonth={true}>{day}</DayNumber>
          {events.map((event, idx) => (
            <EventBadge 
              key={`${event.id}-${idx}`} 
              $circuit={event.circuit}
              onClick={() => handleEventClick(event)}
            >
              {event.name.split(' ')[0]}
            </EventBadge>
          ))}
        </DayCell>
      );
    }
    
    const remainingCells = 7 - (cells.length % 7);
    if (remainingCells < 7) {
      for (let i = 0; i < remainingCells; i++) {
        cells.push(
          <DayCell key={`end-empty-${i}`} $isCurrentMonth={false}>
            <DayNumber $isCurrentMonth={false}></DayNumber>
          </DayCell>
        );
      }
    }

    return (
      <MonthSection key={monthName}>
        <MonthHeader>
          <MonthTitle>{monthName} 2026</MonthTitle>
        </MonthHeader>
        <CalendarGrid>
          {dayNames.map(day => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}
          {cells}
        </CalendarGrid>
      </MonthSection>
    );
  };

  return (
    <CalendarContainer>
      {months.map(m => renderMonth(m.name, m.num))}
      <MonthSection>
        <Legend>
          <LegendItem>
            <LegendColor $color={circuitColors.NXTpro.bg} />
            <LegendLabel>Puma NXTpro</LegendLabel>
          </LegendItem>
          <LegendItem>
            <LegendColor $color={circuitColors.OTR.bg} />
            <LegendLabel>On The Radar</LegendLabel>
          </LegendItem>
          <LegendItem>
            <LegendColor $color={circuitColors.AAU.bg} />
            <LegendLabel>AAU</LegendLabel>
          </LegendItem>
          <LegendItem>
            <LegendColor $color={circuitColors.LOCAL.bg} />
            <LegendLabel>Local</LegendLabel>
          </LegendItem>
        </Legend>
      </MonthSection>

      {/* Event Details Modal */}
      {selectedEvent && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <ModalTitle>{selectedEvent.name}</ModalTitle>
              <ModalDate>{selectedEvent.date}</ModalDate>
            </ModalHeader>
            <ModalBody>
              <InfoSection>
                <InfoLabel>Location</InfoLabel>
                <InfoText>{selectedEvent.city}, {selectedEvent.state}</InfoText>
              </InfoSection>

              <InfoSection>
                <InfoLabel>Venue</InfoLabel>
                <VenueName>{selectedEvent.venue.name}</VenueName>
                <InfoText>{selectedEvent.venue.address}</InfoText>
              </InfoSection>

              <InfoSection>
                <InfoLabel>Circuit</InfoLabel>
                <CircuitBadge $circuit={selectedEvent.circuit}>
                  {selectedEvent.circuit}
                </CircuitBadge>
              </InfoSection>

              {selectedEvent.details && (
                <InfoSection>
                  <InfoLabel>Details</InfoLabel>
                  <DetailsText>{selectedEvent.details}</DetailsText>
                </InfoSection>
              )}

              {selectedEvent.hotelLink && (
                <HotelLink
                  href={selectedEvent.hotelLink}
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
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </CalendarContainer>
  );
};

export default TournamentCalendar;
