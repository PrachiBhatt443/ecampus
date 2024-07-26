import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Box, Container, Typography, Paper, Avatar } from '@mui/material';
import { Person, School, Work } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { Fade, Zoom } from 'react-reveal';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardHover = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Function to get a random Unsplash image URL
const getRandomUnsplashImage = (index) => {
  const baseUrl = 'https://source.unsplash.com/random/100x100?person';
  return `${baseUrl}${index}`;
};

const Faculty = () => {
  const faculty = useSelector(selectSchool).faculty;

  return (
    <Container sx={{ backgroundColor: '#f9fbe7', paddingY: 6, borderRadius: 2 }}>
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h1" gutterBottom color="#2e7d32">
          Meet Our Faculty
        </Typography>
        {faculty.map((member, index) => (
          <Zoom key={index}>
            <Paper
              elevation={6}
              sx={{
                padding: 3,
                marginBottom: 3,
                borderRadius: 2,
                animation: `${fadeIn} 1s ease-in-out`,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  animation: `${cardHover} 0.3s ease-in-out`,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Avatar
                src={getRandomUnsplashImage(index)}
                alt={member.name}
                sx={{ width: 120, height: 120, marginRight: 3, border: '2px solid #4caf50' }}
              />
              <Box>
                <Typography variant="h5" color="#388e3c">{member.name}</Typography>
                <Typography variant="subtitle1" color="#555">
                  <Person color="action" /> {member.position}
                </Typography>
                <Typography variant="body1" color="#666">
                  <School color="action" /> Qualification: {member.qualification}
                </Typography>
                <Typography variant="body1" color="#666">
                  <Work color="action" /> Experience: {member.experience}
                </Typography>
              </Box>
            </Paper>
          </Zoom>
        ))}
      </Box>
    </Container>
  );
};

export default Faculty;
