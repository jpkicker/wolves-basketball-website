import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Travel from './pages/Travel';
import Players from './pages/PlayersOptionB';
import PlayerDetail from './pages/PlayerDetail';
import Announcements from './pages/Announcements';
import WolfsDen from './pages/WolfsDen';

const GlobalStyle = createGlobalStyle`
  :root {
    --navy: #001f3f;
    --navy-dark: #001529;
    --navy-light: #003366;
    --gold: #ffd700;
    --gold-dark: #d4af00;
    --gold-light: #ffe44d;
    --white: #ffffff;
    --off-white: #f8f9fa;
    --gray-100: #f1f3f5;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-500: #6c757d;
    --gray-700: #495057;
    --gray-900: #212529;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Barlow', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    background-color: var(--white);
    color: var(--gray-900);
    overflow-x: hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--navy-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gold-light);
  }

  /* Selection color */
  ::selection {
    background: var(--gold);
    color: var(--navy);
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:playerId" element={<PlayerDetail />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/wolfs-den" element={<WolfsDen />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
