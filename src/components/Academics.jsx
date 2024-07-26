import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import {
  Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails,
  List, ListItem, ListItemIcon, Paper, useMediaQuery
} from '@mui/material';
import { ExpandMore, Book, Science, Public } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

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

// Define a new theme for the page
const theme = {
  background: 'linear-gradient(to bottom right, #d0f4c4, #a5d6a7)', // Mint green gradient for background
  accordion: {
    backgroundColor: '#80cbc4', // Light teal for accordion
  },
  text: '#004d40', // Dark teal for text
  hover: '#c8e6c9', // Very light mint green for hover effect
  fontFamily: 'Roboto, sans-serif', 
};

const Academics = () => {
  const academics = useSelector(selectSchool).academics;
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Check for small screen sizes

  return (
    <Container
      sx={{
        marginTop: '4rem',
        backgroundColor: '#f9fbe7',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: theme.fontFamily,
        paddingX: isSmallScreen ? 2 : 4, // Adjust padding for small screens
      }}
    >
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h1" gutterBottom sx={{ fontSize: isSmallScreen ? '2rem' : '2.5rem', fontWeight: 'bold', color: theme.text }}>
          Academics
        </Typography>

        <Accordion sx={{ background: theme.background, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="primary-content" id="primary-header">
            <Typography variant="h5" sx={{ fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}>Primary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.background }}>
              <List>
                {academics.curriculum.primary.map((subject, index) => (
                  <ListItem 
                    key={index}
                    sx={{ animation: `${fadeIn} 1s ease-in-out`, ':hover': { backgroundColor: theme.hover }, fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}
                    role="listitem"
                    aria-label={`Primary subject: ${subject}`}
                  >
                    <ListItemIcon>
                      <Book color="primary" />
                    </ListItemIcon>
                    {subject}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ background: theme.background, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="secondary-content" id="secondary-header">
            <Typography variant="h5" sx={{ fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}>Secondary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.background }}>
              <List>
                {academics.curriculum.secondary.map((subject, index) => (
                  <ListItem 
                    key={index}
                    sx={{ animation: `${fadeIn} 1s ease-in-out`, ':hover': { backgroundColor: theme.hover }, fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}
                    role="listitem"
                    aria-label={`Secondary subject: ${subject}`}
                  >
                    <ListItemIcon>
                      <Book color="primary" />
                    </ListItemIcon>
                    {subject}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ background: theme.background, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 2, marginBottom: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="senior-secondary-content" id="senior-secondary-header">
            <Typography variant="h5" sx={{ fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}>Senior Secondary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ backgroundColor: theme.accordion, marginBottom: 2, boxShadow: 'none', borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="science-content" id="science-header">
                <Typography variant="h6" sx={{ fontSize: isSmallScreen ? '1.1rem' : '1.3rem', fontWeight: 'bold', color: theme.text }}>
                  <Science color="secondary" /> Science
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.background }}>
                  <List>
                    {academics.curriculum.seniorSecondary.science.map((subject, index) => (
                      <ListItem 
                        key={index}
                        sx={{ animation: `${fadeIn} 1s ease-in-out`, ':hover': { backgroundColor: theme.hover }, fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}
                        role="listitem"
                        aria-label={`Senior Secondary Science subject: ${subject}`}
                      >
                        {subject}
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: theme.accordion, boxShadow: 'none', borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="commerce-content" id="commerce-header">
                <Typography variant="h6" sx={{ fontSize: isSmallScreen ? '1.1rem' : '1.3rem', fontWeight: 'bold', color: theme.text }}>
                  <Public color="secondary" /> Commerce
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.background }}>
                  <List>
                    {academics.curriculum.seniorSecondary.commerce.map((subject, index) => (
                      <ListItem 
                        key={index}
                        sx={{ animation: `${fadeIn} 1s ease-in-out`, ':hover': { backgroundColor: theme.hover }, fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: theme.text }}
                        role="listitem"
                        aria-label={`Senior Secondary Commerce subject: ${subject}`}
                      >
                        {subject}
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        <Box textAlign="center" marginTop={4}>
          <Typography variant="h4" gutterBottom sx={{ fontSize: isSmallScreen ? '1.5rem' : '1.8rem', fontWeight: 'bold', color: theme.text }}>
            Methodologies
          </Typography>
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', borderRadius: 2, backgroundColor: theme.background, textAlign: 'center' }}>
            <img src="https://via.placeholder.com/350x250/" alt="Methodologies" style={{ width: '100%', maxWidth: isSmallScreen ? '100%' : '350px', borderRadius: '8px' }} />
            <Typography sx={{ marginLeft: isSmallScreen ? 0 : 2, marginTop: isSmallScreen ? 2 : 0, fontSize: isSmallScreen ? '1.2rem' : '1.5rem', color: theme.text }}>
              {academics.methodologies}
            </Typography>
          </Paper>
          <Typography variant="h4" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: theme.text }}>
            Resources
          </Typography>
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', borderRadius: 2, backgroundColor: theme.background, textAlign: 'center' }}>
            <img src="https://via.placeholder.com/350x250/" alt="Resources" style={{ marginBottom: '1rem', borderRadius: '8px' }} />
            <Typography sx={{ marginLeft: isSmallScreen ? 0 : 2, marginTop: isSmallScreen ? 2 : 0, fontSize: isSmallScreen ? '1.2rem' : '1.5rem', color: theme.text }}>{academics.resources}</Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Academics;
