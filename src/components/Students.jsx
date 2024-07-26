// src/pages/Students.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Container, Typography, Grid, Card, CardContent, Box, CardMedia, styled } from '@mui/material';
import { keyframes } from '@emotion/react';
import { Fade } from 'react-reveal';

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

// Styled Card components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '16px 16px 0 0',
}));

const HorizontalCard = styled(StyledCard)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const VerticalCard = styled(StyledCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Students = () => {
  const { students } = useSelector(selectSchool);

  return (
    <Container sx={{ marginTop: 8 }}>
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h1" gutterBottom>
          Students
        </Typography>
      </Box>

      {/* Student Council */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 8, marginBottom: 4 }}>
        <Fade top>
          Student Council
        </Fade>
      </Typography>
      <Grid container spacing={4}>
        {students.council.map((member, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <HorizontalCard sx={{ animation: `${fadeIn} 1s ease-in-out` }}>
              <StyledCardMedia
                component="img"
                alt={member.name}
                image={`https://source.unsplash.com/600x400/?student`}
                sx={{ width: 200, height: 200 }}
              />
              <CardContent>
                <Typography variant="h6">{member.name} - {member.position} (Grade {member.grade})</Typography>
              </CardContent>
            </HorizontalCard>
          </Grid>
        ))}
      </Grid>

      {/* Achievements */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 8, marginBottom: 4 }}>
        <Fade top>
          Achievements
        </Fade>
      </Typography>
      <Grid container spacing={4}>
        {students.achievements.map((achievement, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <HorizontalCard sx={{ animation: `${fadeIn} 1s ease-in-out` }}>
              <StyledCardMedia
                component="img"
                alt={achievement}
                image={`https://source.unsplash.com/600x400/?trophy`}
                sx={{ width: 200, height: 200 }}
              />
              <CardContent>
                <Typography variant="h6">{achievement}</Typography>
              </CardContent>
            </HorizontalCard>
          </Grid>
        ))}
      </Grid>

      {/* Activities */}
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 4 }}>
        <Fade top>
          Activities
        </Fade>
      </Typography>
      <Grid container spacing={4}>
        {students.activities.map((activity, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <VerticalCard sx={{ animation: `${fadeIn} 1s ease-in-out` }}>
              <StyledCardMedia
                component="img"
                alt={activity}
                image={`https://source.unsplash.com/600x400/?${activity.replace(/\s+/g, '')}`}
                sx={{ width: '100%', height: 200 }}
              />
              <CardContent>
                <Typography variant="h6">{activity}</Typography>
              </CardContent>
            </VerticalCard>
          </Grid>
        ))}
      </Grid>

      {/* Clubs */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 8, marginBottom: 4 }}>
        <Fade top>
          Clubs
        </Fade>
      </Typography>
      <Grid container spacing={4}>
        {students.clubs.map((club, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <VerticalCard sx={{ animation: `${fadeIn} 1s ease-in-out` }}>
              <StyledCardMedia
                component="img"
                alt={club}
                image={`https://source.unsplash.com/600x400/?${club.replace(/\s+/g, '')}`}
                sx={{ width: '100%', height: 200 }}
              />
              <CardContent>
                <Typography variant="h6">{club}</Typography>
              </CardContent>
            </VerticalCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Students;
