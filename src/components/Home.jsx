import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Container, Grid, Typography, Paper, Button, Box, Collapse, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import bg from '../img/bg.jpg'; // Ensure the image path is correct
import { keyframes } from '@emotion/react';
import CarouselComponent from './CarouselComponent';
import ContactUs from './ContactUs';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home = () => {
  const { schoolName, introduction, upcomingEvents, importantAnnouncements, aboutUs } = useSelector(selectSchool);
  const [openEvent, setOpenEvent] = useState(null);
  const [openAnnouncement, setOpenAnnouncement] = useState(null);

  const handleToggleEvent = (id) => {
    setOpenEvent(openEvent === id ? null : id);
  };

  const handleToggleAnnouncement = (id) => {
    setOpenAnnouncement(openAnnouncement === id ? null : id);
  };

  return (
    <>
      <Element name="home" id="home">
        <Container
          maxWidth="xl"
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            paddingTop: 8,
            backgroundColor: '#f1f1f1', // Light background color
          }}
        >
          <Paper
            elevation={6}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light white with slight transparency
              marginTop: 4,
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              animation: `${fadeIn} 2s ease-in-out`,
              borderRadius: 2,
              padding: 3,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: '4rem', // Increased text size
                fontWeight: 'bold',
                color: 'transparent',
                background: 'linear-gradient(45deg, #6D4C41 30%, #8D6E63 90%)', // Warm gradient
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              {schoolName}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.5rem', // Adjusted text size for readability
                fontWeight: 'bold',
                color: '#3e2723', // Dark brown color for text
                backgroundColor: "#fbe9e7", // Light warm background
                padding: 2,
                borderRadius: 1,
              }}
            >
              {introduction}
            </Typography>
          </Paper>

          {/* Carousel with smaller size and relevant images */}
          <Container sx={{ marginTop: 4, textAlign: 'center' }}>
            <CarouselComponent />
          </Container>
          <Container sx={{ textAlign: 'center', marginTop: 4 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#6D4C41', color: '#ffffff' }} // Warm color for button
              href="/gallery"
            >
              Show More
            </Button>
          </Container>

          {/* Latest Updates Section */}
          <Container sx={{ marginTop: 8, padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
            <Grid container spacing={4}>
              {/* About Us Brief */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    backgroundColor: 'rgba(255, 248, 225, 0.5)', 
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: '#6D4C41', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <EventIcon sx={{ marginRight: 1 }} />
                    About Us
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {aboutUs.introduction}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                    Vision:
                    <br />
                    {aboutUs.vision}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
                    Mission:
                    <br />
                    {aboutUs.mission}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#6D4C41', color: '#ffffff' }} // Warm color for button
                    href="/about"
                  >
                    Know More
                  </Button>
                </Paper>
              </Grid>

              {/* Upcoming Events & Important Announcements */}
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    backgroundColor: '#FFF8E1', // Light cream background
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: '#6D4C41', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AnnouncementIcon sx={{ marginRight: 1 }} />
                    Updates
                  </Typography>
                  <Box>
                    {/* Upcoming Events */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                      Upcoming Events
                    </Typography>
                    {upcomingEvents.map((event) => (
                      <Box key={event.id} sx={{ marginBottom: 2 }}>
                        <Paper
                          elevation={2}
                          sx={{
                            padding: 2,
                            borderRadius: 1,
                            backgroundColor: '#FFF9C4', // Light yellow background
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                            <EventIcon sx={{ marginRight: 1 }} />
                            {event.title}
                            <IconButton
                              sx={{ marginLeft: 'auto' }}
                              onClick={() => handleToggleEvent(event.id)}
                            >
                              {openEvent === event.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {event.date}
                          </Typography>
                          <Collapse in={openEvent === event.id}>
                            <Typography variant="body2" sx={{ marginTop: 1 }}>
                              {event.details}
                            </Typography>
                          </Collapse>
                        </Paper>
                      </Box>
                    ))}

                    
                
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Element>
      <ContactUs />
    </>
  );
};

export default Home;
// {/* Important Announcements */}
// <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 4 }}>
// Important Announcements
// </Typography>
// {importantAnnouncements.map((announcement) => (
// <Box key={announcement.id} sx={{ marginBottom: 2 }}>
//   <Paper
//     elevation={2}
//     sx={{
//       padding: 2,
//       borderRadius: 1,
//       backgroundColor: '#FFE0B2', // Light orange background
//       cursor: 'pointer',
//       textAlign: 'left',
//     }}
//   >
//     <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
//       <AnnouncementIcon sx={{ marginRight: 1 }} />
//       {announcement.title}
//       <IconButton
//         sx={{ marginLeft: 'auto' }}
//         onClick={() => handleToggleAnnouncement(announcement.id)}
//       >
//         {openAnnouncement === announcement.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       </IconButton>
//     </Typography>
//     <Typography variant="body2" color="textSecondary">
//       {announcement.date}
//     </Typography>
//     <Collapse in={openAnnouncement === announcement.id}>
//       <Typography variant="body2" sx={{ marginTop: 1 }}>
//         {announcement.details}
//       </Typography>
//     </Collapse>
//   </Paper>