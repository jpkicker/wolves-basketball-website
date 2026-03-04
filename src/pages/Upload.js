import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 60vh;
  padding: 4rem 2rem;
  text-align: center;
  background: #f1f3f5;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  color: #001f3f;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #001f3f;
  color: #ffd700;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #003366; }
`;

const Upload = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Wolves2026') {
      setAuthenticated(true);
    } else {
      setError('Incorrect password');
    }
  };

  if (authenticated) {
    return (
      <Container>
        <Title>🎬 Upload Highlights</Title>
        <Card>
          <p style={{fontSize:'1.2rem', color:'#001f3f'}}>Upload form coming soon! Firebase is connected.</p>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Title>🔐 Team Access Required</Title>
      <p style={{color:'#666', marginBottom:'2rem'}}>Enter the team password to upload video highlights</p>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter team password"
          />
          {error && <p style={{color:'red', marginBottom:'1rem'}}>{error}</p>}
          <Button type="submit">Access Upload Portal</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Upload;
