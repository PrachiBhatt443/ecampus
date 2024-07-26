import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import the MenuIcon for the dropdown

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#4a4a4a' }}> {/* Dark grey background */}
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h6" sx={{ color: '#ffffff' }}>
            Springdale Public School
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/" sx={{ color: '#ffffff' }}>Home</Button>
            <Button color="inherit" component={Link} to="/about" sx={{ color: '#ffffff' }}>About</Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: '#ffffff' }}>Contact Us</Button>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: '#ffffff' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: '200px',
                  backgroundColor: '#f5f5f5', // Light background for the menu
                },
              }}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/academics">Academics</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/admissions">Admissions</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/faculty">Faculty</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/students">Students</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/gallery">Gallery</MenuItem>
            </Menu>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
