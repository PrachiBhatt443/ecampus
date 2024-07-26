// src/pages/Gallery.js
import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Box, Select, MenuItem, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGallery } from '../features/gallerySlice';

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: '16px 16px 0 0',
}));

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const { images, videos } = useSelector(selectGallery);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredImages = images.filter(image => filter === 'all' || image.description.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container sx={{ marginTop: 8 }}>
      

      {/* Filter Dropdown */}
      <Box sx={{ marginBottom: 4, textAlign: 'center',display:'flex',alignItems:'center',justifyContent:'center',gap:6 }}>
      <Typography variant="h2" gutterBottom align="center" sx={{ marginTop: 2 }}>
        Gallery
      </Typography>
        <Select
          value={filter}
          onChange={handleFilterChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Filter by event type' }}
          sx={{ width: '200px' }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="culture">Culture</MenuItem>
          <MenuItem value="classroom">Classroom</MenuItem>
          <MenuItem value="library">Library</MenuItem>
        </Select>
      </Box>

      {/* Images Gallery */}
      <Grid container spacing={3}>
        {filteredImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StyledCard>
              <StyledCardMedia
                component="img"
                alt={image.description}
                height="200"
                image={image.src}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" align="center">
                  {image.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Videos Gallery */}
      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 8, marginBottom: 4 }}>
        Videos
      </Typography>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <StyledCard>
              <CardMedia
                component="video"
                controls
                height="200"
                src={video.src}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" align="center">
                  {video.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
