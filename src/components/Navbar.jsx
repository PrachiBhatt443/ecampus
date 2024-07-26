import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import the MenuIcon for the dropdown
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon for closing the menu on mobile
import logo from '../img/logo.png';

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
    <AppBar position="fixed" sx={{ backgroundColor: '#4a4a4a' }} role="banner">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo with alt text for screen readers */}
            <img src={logo} alt="Springdale Public School Logo" style={{ height: 50, marginRight: 16 }} /> 
            
            <Typography variant="h6" sx={{ color: '#ffffff', display: { xs: 'none', sm: 'block' } }} aria-label="School Name">
              Springdale Public School
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={Link} to="/" sx={{ color: '#ffffff' }} aria-label="Home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ color: '#ffffff' }} aria-label="About">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: '#ffffff' }} aria-label="Contact Us">
              Contact Us
            </Button>
            <IconButton color="inherit" onClick={handleMenuOpen} aria-label="Open menu">
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
              aria-labelledby="menu-button"
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/academics" aria-label="Academics">
                Academics
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/admissions" aria-label="Admissions">
                Admissions
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/faculty" aria-label="Faculty">
                Faculty
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/students" aria-label="Students">
                Students
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/gallery" aria-label="Gallery">
                Gallery
              </MenuItem>
            </Menu>
          </Box>
          {/* Mobile Menu */}
          <IconButton color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={handleMobileMenuToggle} aria-label="Open mobile menu">
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
            aria-labelledby="mobile-menu-button"
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
              <IconButton onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
                <CloseIcon />
              </IconButton>
            </Box>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/" aria-label="Home">
              Home
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/about" aria-label="About">
              About
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/contact" aria-label="Contact Us">
              Contact Us
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/academics" aria-label="Academics">
              Academics
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/admissions" aria-label="Admissions">
              Admissions
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/faculty" aria-label="Faculty">
              Faculty
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/students" aria-label="Students">
              Students
            </MenuItem>
            <MenuItem onClick={handleMobileMenuToggle} component={Link} to="/gallery" aria-label="Gallery">
              Gallery
            </MenuItem>
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
