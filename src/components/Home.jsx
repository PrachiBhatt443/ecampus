import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Container, Grid, Typography, Paper, Button, Box, Collapse, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import bg from '../img/bg.jpg'; 
import CarouselComponent from './CarouselComponent';
import ContactUs from './ContactUs';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const flashingAnimation = keyframes`
  0% { background-color: #FF5722; }   // Bright orange
  50% { background-color: #FFC107; }  // Amber
  100% { background-color: #FF5722; } // Bright orange
`;

const Home = () => {
  const { schoolName, introduction, upcomingEvents, importantAnnouncements, aboutUs } = useSelector(selectSchool);
  const [openEvent, setOpenEvent] = useState(null);
  const [openAnnouncement, setOpenAnnouncement] = useState(null);

  const handleToggleEvent = (id) => {
    setOpenEvent((prev) => (prev === id ? null : id));
  };

  const handleToggleAnnouncement = (id) => {
    setOpenAnnouncement((prev) => (prev === id ? null : id));
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
            backgroundColor: '#f1f1f1',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Paper
              elevation={6}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                marginTop: 4,
                textAlign: 'center',
                borderRadius: 2,
                padding: 3,
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #6D4C41 30%, #8D6E63 90%)',
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
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#3e2723',
                  backgroundColor: "#fbe9e7",
                  padding: 2,
                  borderRadius: 1,
                }}
              >
                {introduction}
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Container sx={{ marginTop: 4, textAlign: 'center' }}>
              <CarouselComponent />
            </Container>
          </motion.div>

          <Container sx={{ textAlign: 'center', marginTop: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#6D4C41',
                color: '#ffffff',
                animation: `${flashingAnimation} 1.5s infinite`,
                '&:hover': {
                  backgroundColor: '#5d4037',
                },
              }}
              href="/gallery"
            >
              Show More
            </Button>
          </Container>

          <Container sx={{ marginTop: 8, padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
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
                      sx={{ backgroundColor: '#6D4C41', color: '#ffffff' }}
                      href="/about"
                    >
                      Know More
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      padding: 3,
                      backgroundColor: '#FFF8E1',
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
                              backgroundColor: '#FFF9C4',
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

                      {/* Important Announcements
                      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 4 }}>
                        Important Announcements
                      </Typography>
                      {importantAnnouncements.map((announcement) => (
                        <Box key={announcement.id} sx={{ marginBottom: 2 }}>
                          <Paper
                            elevation={2}
                            sx={{
                              padding: 2,
                              borderRadius: 1,
                              backgroundColor: '#FFE0B2',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                              <AnnouncementIcon sx={{ marginRight: 1 }} />
                              {announcement.title}
                              <IconButton
                                sx={{ marginLeft: 'auto' }}
                                onClick={() => handleToggleAnnouncement(announcement.id)}
                              >
                                {openAnnouncement === announcement.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                              </IconButton>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {announcement.date}
                            </Typography>
                            <Collapse in={openAnnouncement === announcement.id}>
                              <Typography variant="body2" sx={{ marginTop: 1 }}>
                                {announcement.details}
                              </Typography>
                            </Collapse>
                          </Paper>
                        </Box>
                      ))} */}
                    </Box>
                  </Paper>
                </motion.div>
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
