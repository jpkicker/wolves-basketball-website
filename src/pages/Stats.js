import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { playerStats, teamStats, seasonRecord } from '../data/stats2026';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StatsContainer = styled.div`
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
    top: 0; left: 0; right: 0; bottom: 0;
    background:
      linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
      linear-gradient(225deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 4px;
    background: var(--gold);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
  color: var(--gold);
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) { font-size: 2.5rem; }
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const RecordBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,215,0,0.1);
  border: 1px solid rgba(255,215,0,0.3);
  border-radius: 8px;
  padding: 12px 24px;
  margin-top: 1.5rem;
`;

const RecordItem = styled.div`
  text-align: center;
`;

const RecordValue = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--gold);
  line-height: 1;
`;

const RecordLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const RecordDivider = styled.div`
  width: 1px;
  height: 30px;
  background: rgba(255,215,0,0.3);
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: -2rem auto 0;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 2;
`;

const SortTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const SortTab = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${props => props.$active ? 'var(--gold)' : 'var(--gray-300)'};
  background: ${props => props.$active ? 'var(--navy)' : 'white'};
  color: ${props => props.$active ? 'var(--gold)' : 'var(--gray-700)'};
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { border-color: var(--gold); }
`;

const TableWrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  overflow-x: auto;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const StatsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
`;

const Th = styled.th`
  padding: 14px 12px;
  text-align: ${props => props.$left ? 'left' : 'center'};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--gray-500);
  background: var(--gray-100);
  border-bottom: 2px solid var(--gray-200);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: color 0.2s;

  &:hover { color: var(--navy); }

  ${props => props.$sorted && `
    color: var(--navy);
    &::after {
      content: ' ${props.$sortDir === 'asc' ? '▲' : '▼'}';
      font-size: 0.6rem;
    }
  `}
`;

const Td = styled.td`
  padding: 12px;
  text-align: ${props => props.$left ? 'left' : 'center'};
  font-size: 0.9rem;
  color: var(--gray-900);
  border-bottom: 1px solid var(--gray-200);
  white-space: nowrap;
`;

const PlayerName = styled.span`
  font-weight: 600;
  color: var(--navy);
`;

const PlayerNumber = styled.span`
  font-size: 0.75rem;
  color: var(--gray-500);
  margin-left: 4px;
`;

const TeamRow = styled.tr`
  background: var(--navy);
  td {
    color: var(--gold) !important;
    font-weight: 700;
    border-bottom: none;
  }
`;

const HighlightCell = styled(Td)`
  font-weight: 700;
  color: var(--navy);
`;

const StatLeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
`;

const LeaderCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  border-top: 3px solid var(--gold);
  animation: ${fadeInUp} 0.6s ease-out;
`;

const LeaderStat = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--navy);
  line-height: 1;
`;

const LeaderLabel = styled.div`
  font-size: 0.7rem;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
`;

const LeaderName = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy);
  margin-top: 4px;
`;

const columns = [
  { key: 'name', label: 'Player', left: true },
  { key: 'gp', label: 'GP' },
  { key: 'ppg', label: 'PPG' },
  { key: 'rpg', label: 'RPG' },
  { key: 'apg', label: 'APG' },
  { key: 'fgPct', label: 'FG%' },
  { key: 'threePct', label: '3PT%' },
  { key: 'ftPct', label: 'FT%' },
  { key: 'spg', label: 'SPG' },
  { key: 'bpg', label: 'BPG' },
  { key: 'topg', label: 'TO' },
  { key: 'pfpg', label: 'PF' },
];

function getLeaders(stats) {
  const best = (key) => stats.reduce((a, b) => (a[key] > b[key] ? a : b));
  return [
    { label: 'Points', stat: best('ppg').ppg, unit: 'PPG', player: best('ppg').name },
    { label: 'Rebounds', stat: best('rpg').rpg, unit: 'RPG', player: best('rpg').name },
    { label: 'Assists', stat: best('apg').apg, unit: 'APG', player: best('apg').name },
    { label: 'Steals', stat: best('spg').spg, unit: 'SPG', player: best('spg').name },
    { label: 'Blocks', stat: best('bpg').bpg, unit: 'BPG', player: best('bpg').name },
    { label: 'FG%', stat: best('fgPct').fgPct + '%', unit: '', player: best('fgPct').name },
  ];
}

export default function Stats() {
  const [sortKey, setSortKey] = useState('ppg');
  const [sortDir, setSortDir] = useState('desc');

  const handleSort = (key) => {
    if (key === 'name') {
      setSortKey('name');
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else if (sortKey === key) {
      setSortDir(sortDir === 'desc' ? 'asc' : 'desc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const sorted = [...playerStats].sort((a, b) => {
    if (sortKey === 'name') {
      return sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    return sortDir === 'desc' ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey];
  });

  const leaders = getLeaders(playerStats);

  const quickSorts = [
    { key: 'ppg', label: 'Points' },
    { key: 'rpg', label: 'Rebounds' },
    { key: 'apg', label: 'Assists' },
    { key: 'fgPct', label: 'FG%' },
    { key: 'name', label: 'A-Z' },
  ];

  return (
    <StatsContainer>
      <HeroSection>
        <HeroContent>
          <Title>2026 Season Stats</Title>
          <Subtitle>Wellington Wolves 17U Puma — Spring 2026</Subtitle>
          <RecordBadge>
            <RecordItem>
              <RecordValue>{seasonRecord.wins}</RecordValue>
              <RecordLabel>Wins</RecordLabel>
            </RecordItem>
            <RecordDivider />
            <RecordItem>
              <RecordValue>{seasonRecord.losses}</RecordValue>
              <RecordLabel>Losses</RecordLabel>
            </RecordItem>
            <RecordDivider />
            <RecordItem>
              <RecordValue>{teamStats.ppg}</RecordValue>
              <RecordLabel>PPG</RecordLabel>
            </RecordItem>
          </RecordBadge>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <StatLeader>
          {leaders.map((l, i) => (
            <LeaderCard key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <LeaderLabel>{l.label} Leader</LeaderLabel>
              <LeaderStat>{l.stat}{l.unit && <span style={{ fontSize: '0.9rem' }}></span>}</LeaderStat>
              <LeaderName>{l.player}</LeaderName>
            </LeaderCard>
          ))}
        </StatLeader>

        <SortTabs>
          {quickSorts.map(s => (
            <SortTab key={s.key} $active={sortKey === s.key} onClick={() => { setSortKey(s.key); setSortDir(s.key === 'name' ? 'asc' : 'desc'); }}>
              {s.label}
            </SortTab>
          ))}
        </SortTabs>

        <TableWrapper>
          <StatsTable>
            <thead>
              <tr>
                {columns.map(col => (
                  <Th key={col.key} $left={col.left} $sorted={sortKey === col.key} $sortDir={sortDir} onClick={() => handleSort(col.key)}>
                    {col.label}
                  </Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((p, i) => (
                <tr key={i}>
                  <Td $left>
                    <PlayerName>{p.name}</PlayerName>
                    {p.number && <PlayerNumber>#{p.number}</PlayerNumber>}
                  </Td>
                  <Td>{p.gp}</Td>
                  <HighlightCell>{p.ppg}</HighlightCell>
                  <Td>{p.rpg}</Td>
                  <Td>{p.apg}</Td>
                  <Td>{p.fgPct}%</Td>
                  <Td>{p.threePct}%</Td>
                  <Td>{p.ftPct}%</Td>
                  <Td>{p.spg}</Td>
                  <Td>{p.bpg}</Td>
                  <Td>{p.topg}</Td>
                  <Td>{p.pfpg}</Td>
                </tr>
              ))}
              <TeamRow>
                <Td $left>Team</Td>
                <Td>{teamStats.gp}</Td>
                <Td>{teamStats.ppg}</Td>
                <Td>{teamStats.rpg}</Td>
                <Td>{teamStats.apg}</Td>
                <Td>{teamStats.fgPct}%</Td>
                <Td>{teamStats.threePct}%</Td>
                <Td>{teamStats.ftPct}%</Td>
                <Td>{teamStats.spg}</Td>
                <Td>{teamStats.bpg}</Td>
                <Td>{teamStats.topg}</Td>
                <Td>{teamStats.pfpg}</Td>
              </TeamRow>
            </tbody>
          </StatsTable>
        </TableWrapper>
      </ContentSection>
    </StatsContainer>
  );
}
