import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaVideo, FaLock, FaUpload, FaCheckCircle } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { rosterEnhanced } from '../data/players-enhanced';
import { extractVideoId } from '../utils/youtube';

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
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.6s ease;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  color: var(--navy);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: var(--gold);
  }
`;

const Subtitle = styled.p`
  font-family: 'Barlow', sans-serif;
  color: var(--gray-600);
  font-size: 1.1rem;
`;

const Card = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${fadeInUp} 0.6s ease 0.2s backwards;
`;

const AuthSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--gray-200);
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &.error {
    border-color: #e74c3c;
  }
`;

const AuthButton = styled.button`
  background: var(--navy);
  color: var(--white);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    background: var(--navy-light);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &.error {
    border-color: #e74c3c;
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }

  &.error {
    border-color: #e74c3c;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--gold);
  }
`;

const SubmitButton = styled.button`
  background: var(--gold);
  color: var(--navy);
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background: var(--gold-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-family: 'Barlow', sans-serif;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #28a745;
    font-size: 1.25rem;
  }
`;

const Upload = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    playerId: '',
    title: '',
    youtubeUrl: '',
    description: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Team password (in a real app, this would be stored securely in Firestore)
  const TEAM_PASSWORD = 'Wolves2026';

  const handleAuth = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');

    // Simulate API call delay
    setTimeout(() => {
      if (password === TEAM_PASSWORD) {
        setIsAuthenticated(true);
      } else {
        setAuthError('Incorrect password. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.playerId) {
      errors.playerId = 'Please select a player';
    }

    if (!formData.title.trim()) {
      errors.title = 'Video title is required';
    }

    if (!formData.youtubeUrl.trim()) {
      errors.youtubeUrl = 'YouTube URL is required';
    } else {
      const videoId = extractVideoId(formData.youtubeUrl);
      if (!videoId) {
        errors.youtubeUrl = 'Please enter a valid YouTube URL';
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});
    setSuccessMessage('');

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      // Find the selected player
      const selectedPlayer = rosterEnhanced.find(p => p.id === formData.playerId);
      const videoId = extractVideoId(formData.youtubeUrl);

      // Save to Firestore
      await addDoc(collection(db, 'highlights'), {
        playerId: formData.playerId,
        playerName: `${selectedPlayer.firstName} ${selectedPlayer.lastName}`,
        title: formData.title.trim(),
        youtubeUrl: formData.youtubeUrl.trim(),
        youtubeVideoId: videoId,
        description: formData.description.trim(),
        submittedAt: serverTimestamp(),
        approved: true // Default to true for now
      });

      setSuccessMessage(`Highlight video for ${selectedPlayer.firstName} ${selectedPlayer.lastName} has been uploaded successfully!`);
      
      // Reset form
      setFormData({
        playerId: '',
        title: '',
        youtubeUrl: '',
        description: ''
      });

    } catch (error) {
      console.error('Error uploading highlight:', error);
      setFormErrors({ submit: 'Error uploading video. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (!isAuthenticated) {
    return (
      <PageContainer>
        <Container>
          <Header>
            <Title>
              <FaLock /> Team Access Required
            </Title>
            <Subtitle>Enter the team password to upload video highlights</Subtitle>
          </Header>

          <Card>
            <AuthSection>
              <form onSubmit={handleAuth}>
                <FormGroup>
                  <Label>Team Password</Label>
                  <PasswordInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter team password"
                    className={authError ? 'error' : ''}
                  />
                  {authError && <ErrorMessage>{authError}</ErrorMessage>}
                </FormGroup>
                <AuthButton type="submit" disabled={isLoading}>
                  {isLoading ? 'Verifying...' : 'Access Upload Portal'}
                </AuthButton>
              </form>
            </AuthSection>
          </Card>
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>
            <FaVideo /> Upload Video Highlights
          </Title>
          <Subtitle>Add video highlights for Wellington Wolves players</Subtitle>
        </Header>

        <Card>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Select Player *</Label>
              <Select
                name="playerId"
                value={formData.playerId}
                onChange={handleInputChange}
                className={formErrors.playerId ? 'error' : ''}
              >
                <option value="">Choose a player...</option>
                {rosterEnhanced.map(player => (
                  <option key={player.id} value={player.id}>
                    #{player.number} {player.firstName} {player.lastName} ({player.position})
                  </option>
                ))}
              </Select>
              {formErrors.playerId && <ErrorMessage>{formErrors.playerId}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Video Title *</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Game Winner vs Miami Elite"
                className={formErrors.title ? 'error' : ''}
              />
              {formErrors.title && <ErrorMessage>{formErrors.title}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>YouTube URL *</Label>
              <Input
                type="url"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleInputChange}
                placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                className={formErrors.youtubeUrl ? 'error' : ''}
              />
              {formErrors.youtubeUrl && <ErrorMessage>{formErrors.youtubeUrl}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Description (Optional)</Label>
              <TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Additional details about this highlight..."
              />
            </FormGroup>

            {formErrors.submit && <ErrorMessage>{formErrors.submit}</ErrorMessage>}

            <SubmitButton type="submit" disabled={isLoading}>
              <FaUpload />
              {isLoading ? 'Uploading...' : 'Upload Highlight'}
            </SubmitButton>

            {successMessage && (
              <SuccessMessage>
                <FaCheckCircle />
                {successMessage}
              </SuccessMessage>
            )}
          </Form>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default Upload;