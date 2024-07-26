// src/pages/Admissions.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon } from '@mui/material';
import { Event, Info, CheckCircle, CalendarToday } from '@mui/icons-material';

const Admissions = () => {
  const admissions = useSelector(selectSchool).admissions;

  return (
    <Container sx={{ marginTop: 8 }}>
      {/* Banner Section */}
      <Box sx={{ marginBottom: 4, position: 'relative' }}>
        <Card
          sx={{
            background: 'linear-gradient(to right, #d9a3a5, #c17d65)', // Brown and Magenta gradient
            color: '#fff',
            padding: 3,
            textAlign: 'center',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginBottom: 4
          }}
        >
          <CardContent>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Admissions
            </Typography>
            <Typography variant="h6">
              Discover the details of our admissions process, criteria, and important dates.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Process Section */}
      <Box sx={{ marginBottom: 4, backgroundColor: '#f4e7e6', padding: 4, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" gutterBottom>
          <ListItemIcon>
            <Info sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Admission Process
        </Typography>
        <Card sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {admissions.process}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Criteria Section */}
      <Box sx={{ marginBottom: 4, backgroundColor: '#f4e1e1', padding: 4, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" gutterBottom>
          <ListItemIcon>
            <CheckCircle sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Admission Criteria
        </Typography>
        <Card sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
          <CardContent>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {admissions.criteria}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Important Dates Section */}
      <Box sx={{ marginBottom: 4, backgroundColor: '#f4e6e1', padding: 4, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" gutterBottom>
          <ListItemIcon>
            <CalendarToday sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Important Dates
        </Typography>
        <Card sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Event sx={{ color: '#c17d65' }} />
                </ListItemIcon>
                <Typography variant="body1">
                  Form Availability: {admissions.dates.formAvailability}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Event sx={{ color: '#c17d65' }} />
                </ListItemIcon>
                <Typography variant="body1">
                  Submission Deadline: {admissions.dates.submissionDeadline}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Event sx={{ color: '#c17d65' }} />
                </ListItemIcon>
                <Typography variant="body1">
                  Entrance Test: {admissions.dates.entranceTest}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Event sx={{ color: '#c17d65' }} />
                </ListItemIcon>
                <Typography variant="body1">
                  Results Announcement: {admissions.dates.resultsAnnouncement}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Admissions;
