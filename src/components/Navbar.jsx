import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import the MenuIcon for the dropdown
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon for closing the menu on mobile

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#4a4a4a' }}> {/* Dark grey background */}
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://via.placeholder.com/150" alt="Logo" style={{ height: 50, marginRight: 16 }} /> {/* Direct URL Logo */}
            <Typography variant="h6" sx={{ color: '#ffffff', display: { xs: 'none', sm: 'block' } }}>
              Springdale Public School
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
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
          </Box>
          {/* Mobile Menu */}
          <IconButton color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={handleMobileMenuToggle}>
            <MenuIcon sx={{ color: '#ffffff' }} />
          </IconButton>
          <Menu
            anchorEl={null}
            open={mobileMenuOpen}
            onClose={handleMobileMenuToggle}
            PaperProps={{
              style: {
                width: '100%',
                backgroundColor: '#f5f5f5',
                position: 'absolute',
                top: '64px', 
                left: 0,
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
              <IconButton onClick={handleMobileMenuToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/about">About</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/contact">Contact Us</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/academics">Academics</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/admissions">Admissions</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/faculty">Faculty</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/students">Students</MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/gallery">Gallery</MenuItem>
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
