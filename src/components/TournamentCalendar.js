import React from 'react';
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

const EventTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--navy);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 0.85rem;
  white-space: nowrap;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: none;

  ${EventBadge}:hover + & {
    display: block;
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

// Helper functions
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const parseDate = (dateStr) => {
  // Parse "03/27 - 03/29" format
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
    
    // Handle same month
    if (startMonth === endMonth) {
      return month === startMonth && day >= startDay && day <= endDay;
    }
    
    // Handle spanning months
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
  const year = 2026;
  const months = [
    { name: 'MARCH', num: 2 },
    { name: 'APRIL', num: 3 },
    { name: 'MAY', num: 4 },
    { name: 'JUNE', num: 5 },
    { name: 'JULY', num: 6 }
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderMonth = (monthName, monthNum) => {
    const daysInMonth = getDaysInMonth(year, monthNum);
    const firstDay = getFirstDayOfMonth(year, monthNum);
    const cells = [];
    
    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <DayCell key={`empty-${i}`} $isCurrentMonth={false}>
          <DayNumber $isCurrentMonth={false}></DayNumber>
        </DayCell>
      );
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDay(monthNum, day, tournaments);
      cells.push(
        <DayCell key={day} $isCurrentMonth={true}>
          <DayNumber $isCurrentMonth={true}>{day}</DayNumber>
          {events.map((event, idx) => (
            <EventBadge 
              key={`${event.id}-${idx}`} 
              $circuit={event.circuit}
              title={`${event.name} - ${event.city}, ${event.state}`}
            >
              {event.name.split(' ')[0]}
            </EventBadge>
          ))}
        </DayCell>
      );
    }
    
    // Fill remaining cells to complete the grid
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
    </CalendarContainer>
  );
};

export default TournamentCalendar;
