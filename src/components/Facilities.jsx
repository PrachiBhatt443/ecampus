// src/pages/Facilities.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Container, Typography, Grid, Paper, Box, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const FacilityList = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  cursor: 'pointer',
  marginBottom:'15px',
  transition: 'background-color 0.3s ease',
  backgroundColor: '#fbe9e7', // Light cream
  '&:hover': {
    backgroundColor: '#FFCCBC', // Light peach on hover
  },
}));

const ImageWrapper = styled(Card)(({ theme }) => ({
  height: '400px',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: '#FFFAF0', // Light warm beige
}));

const Facilities = () => {
  const school = useSelector(selectSchool);
  const [selectedFacility, setSelectedFacility] = useState(school.aboutUs.facilities[0]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % school.aboutUs.facilities.length;
        setSelectedFacility(school.aboutUs.facilities[nextIndex]);
        return nextIndex;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [school.aboutUs.facilities]);

  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h2" gutterBottom align="center" color="#6D4C41">
        Infrastructure and Facilities
      </Typography>

      <Grid container spacing={4}>
        {/* Facilities List */}
        <Grid item xs={12} md={6} >
          <Box >
            {school.aboutUs.facilities.map((facility, index) => (
              <FacilityList 
                key={index}
                onClick={() => {
                  setSelectedFacility(facility);
                  setHighlightedIndex(index);
                }}
                sx={{
                  backgroundColor: index === highlightedIndex ? '#FFCCBC' : '#fbe9e7', // Light peach when selected
                }}
              >
                <Typography variant="h6" color="#6D4C41">
                  {facility.name}
                </Typography>
              </FacilityList>
            ))}
          </Box>
        </Grid>

        {/* Image Display */}
        <Grid item xs={12} md={6}>
          <ImageWrapper>
            <CardMedia
              component="img"
              alt={selectedFacility.name}
              image={selectedFacility.image}
              title={selectedFacility.name}
            />
          </ImageWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Facilities;
