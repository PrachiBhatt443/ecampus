import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Container, Typography, Grid, Card, CardContent, Box, CardMedia, styled } from '@mui/material';
import { motion } from 'framer-motion';

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

  // Placeholder URL
  const placeholderImage = 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <Container sx={{ marginTop: 8 }}>
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h1" gutterBottom>
          Students
        </Typography>
      </Box>

      {/* Student Council */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: 8, marginBottom: 4 }}
        >
          Student Council
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {students.council.map((member, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <HorizontalCard>
                <StyledCardMedia
                  component="img"
                  alt={`Image of ${member.name}`}
                  image={`https://source.unsplash.com/600x400/?student`}
                  onError={(e) => e.currentTarget.src = placeholderImage}
                  sx={{ width: 200, height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6">
                    {member.name} - {member.position} (Grade {member.grade})
                  </Typography>
                </CardContent>
              </HorizontalCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: 8, marginBottom: 4 }}
        >
          Achievements
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {students.achievements.map((achievement, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <HorizontalCard>
                <StyledCardMedia
                  component="img"
                  alt={`Image representing ${achievement}`}
                  image={`https://source.unsplash.com/600x400/?trophy`}
                  onError={(e) => e.currentTarget.src = placeholderImage}
                  sx={{ width: 200, height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6">{achievement}</Typography>
                </CardContent>
              </HorizontalCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginBottom: 4 }}
        >
          Activities
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {students.activities.map((activity, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <VerticalCard>
                <StyledCardMedia
                  component="img"
                  alt={`Image representing ${activity}`}
                  image={`https://source.unsplash.com/600x400/?${activity.replace(/\s+/g, '')}`}
                  onError={(e) => e.currentTarget.src = placeholderImage}
                  sx={{ width: '100%', height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6">{activity}</Typography>
                </CardContent>
              </VerticalCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Clubs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: 8, marginBottom: 4 }}
        >
          Clubs
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {students.clubs.map((club, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <VerticalCard>
                <StyledCardMedia
                  component="img"
                  alt={`Image representing ${club}`}
                  image={`https://source.unsplash.com/600x400/?${club.replace(/\s+/g, '')}`}
                  onError={(e) => e.currentTarget.src = placeholderImage}
                  sx={{ width: '100%', height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6">{club}</Typography>
                </CardContent>
              </VerticalCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Students;
