import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import Facilities from './Facilities';

// Custom styled components
const ImageWrapper = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(2),
  backgroundColor: '#FFFAF0', // Light teal background
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#ECEFF1', // Light grey background
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(4),
}));

const SectionImage = styled(CardMedia)(({ theme }) => ({
  height: '300px',
  borderRadius: theme.shape.borderRadius,
  objectFit: 'cover',
}));

const About = () => {
  const school = useSelector(selectSchool);

  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h2" gutterBottom align="center" color="#00695C">
        About Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, boxShadow: 3, backgroundColor: '#E0F7FA' }}>
              <CardMedia
                component="img"
                alt="Principal"
                height="200"
                image="https://source.unsplash.com/600x400/?principal" 
                sx={{ width: 200, borderRadius: '50%' }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom color="#00695C">
                  Principal's Message
                </Typography>
                <Typography variant="body1" paragraph>
                  {school.aboutUs.principalMessage}
                </Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
      </Grid>

      {/* History */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12}>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <ContentWrapper>
              <Typography variant="h4" gutterBottom color="#00695C">
                History
              </Typography>
              <Typography variant="body1" paragraph>
                {school.aboutUs.history}
              </Typography>
            </ContentWrapper>
          </Slide>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <ImageWrapper>
              <SectionImage
                component="img"
                alt="History"
                image="https://source.unsplash.com/600x400/?education" // Placeholder image
              />
            </ImageWrapper>
          </Slide>
        </Grid>
      </Grid>

      {/* Mission Section and Vision Section */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <ContentWrapper>
              <Typography variant="h4" gutterBottom color="#00695C">
                Mission
              </Typography>
              <Typography variant="body1" paragraph>
                {school.aboutUs.mission}
              </Typography>
            </ContentWrapper>
          </Slide>
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <ImageWrapper>
              <SectionImage
                component="img"
                alt="Mission"
                image="https://source.unsplash.com/600x400/?school-mission" // Placeholder image
              />
            </ImageWrapper>
          </Slide>
        </Grid>
        <Grid item xs={12} md={6}>
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <ImageWrapper>
              <SectionImage
                component="img"
                alt="Vision"
                image="https://source.unsplash.com/600x400/?vision" // Placeholder image
              />
            </ImageWrapper>
          </Slide>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <ContentWrapper>
              <Typography variant="h4" gutterBottom color="#00695C">
                Vision
              </Typography>
              <Typography variant="body1" paragraph>
                {school.aboutUs.vision}
              </Typography>
            </ContentWrapper>
          </Slide>
        </Grid>
      </Grid>

      {/* Facilities Section */}
      <Facilities />
    </Container>
  );
};

export default About;
