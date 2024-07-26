import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import { Event, Info, CheckCircle, CalendarToday, Download } from '@mui/icons-material';

const Admissions = () => {
  const { admissions } = useSelector(selectSchool);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          aria-labelledby="admissions-banner-title"
          aria-describedby="admissions-banner-description"
        >
          <CardContent>
            <Typography
              id="admissions-banner-title"
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Admissions
            </Typography>
            <Typography
              id="admissions-banner-description"
              variant="h6"
            >
              Discover the details of our admissions process, criteria, and important dates.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Process Section */}
      <Box
        sx={{
          marginBottom: 4,
          backgroundColor: '#f4e7e6',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
        role="region"
        aria-labelledby="admissions-process-title"
      >
        <Typography
          id="admissions-process-title"
          variant="h4"
          gutterBottom
        >
          <ListItemIcon>
            <Info sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Admission Process
        </Typography>
        <Card
          sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}
          role="region"
          aria-labelledby="admissions-process-content"
        >
          <CardContent>
            <Typography
              id="admissions-process-content"
              variant="body1"
              sx={{ lineHeight: 1.6 }}
            >
              {admissions.process}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Criteria Section */}
      <Box
        sx={{
          marginBottom: 4,
          backgroundColor: '#f4e1e1',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
        role="region"
        aria-labelledby="admissions-criteria-title"
      >
        <Typography
          id="admissions-criteria-title"
          variant="h4"
          gutterBottom
        >
          <ListItemIcon>
            <CheckCircle sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Admission Criteria
        </Typography>
        <Card
          sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}
          role="region"
          aria-labelledby="admissions-criteria-content"
        >
          <CardContent>
            <Typography
              id="admissions-criteria-content"
              variant="body1"
              sx={{ lineHeight: 1.6 }}
            >
              {admissions.criteria}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Important Dates Section */}
      <Box
        sx={{
          marginBottom: 4,
          backgroundColor: '#f4e6e1',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
        role="region"
        aria-labelledby="important-dates-title"
      >
        <Typography
          id="important-dates-title"
          variant="h4"
          gutterBottom
        >
          <ListItemIcon>
            <CalendarToday sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Important Dates
        </Typography>
        <Card
          sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}
          role="region"
          aria-labelledby="important-dates-content"
        >
          <CardContent>
            <List>
              {Object.entries(admissions.dates).map(([key, value]) => (
                <ListItem key={key}>
                  <ListItemIcon>
                    <Event sx={{ color: '#c17d65' }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    {`${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${value}`}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>

      {/* Downloadable Forms Section */}
      <Box
        sx={{
          marginBottom: 4,
          backgroundColor: '#f4e1e1',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
        role="region"
        aria-labelledby="download-forms-title"
      >
        <Typography
          id="download-forms-title"
          variant="h4"
          gutterBottom
        >
          <ListItemIcon>
            <Download sx={{ color: '#c17d65' }} />
          </ListItemIcon>
          Download Admission Forms
        </Typography>
        <Card
          sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}
          role="region"
          aria-labelledby="download-forms-content"
        >
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Download sx={{ color: '#c17d65' }} />
                </ListItemIcon>
                <Typography variant="body1">
                  <a
                    href="https://form.jotform.com/242072351364450"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Admission Form"
                  >
                    Admission Form
                  </a>
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
