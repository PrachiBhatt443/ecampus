// src/components/Contact.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { selectSchool } from '../features/schoolSlice';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import bg from '../img/bg.jpg';

const ContactUs = () => {
  const { address, phone, email } = useSelector(selectSchool).contact;

  return (
    <Element
      name="contact"
      className="element"
      style={{
        padding: '2rem',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'whitesmoke',
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              <strong>Address:</strong> {address}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Phone:</strong> {phone}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> {email}
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                required
                aria-label="Name"
                aria-required="true"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                required
                type="email"
                aria-label="Email"
                aria-required="true"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                aria-label="Message"
                aria-required="true"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                aria-label="Submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              title="KV Number 1, Delhi Cantt"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.846263148343!2d77.1404854759731!3d28.600157374852926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d08b7b5f41b%3A0xf7c7c77cb41ef17e!2sKendriya%20Vidyalaya%20No.%201%2C%20Delhi%20Cantt!5e0!3m2!1sen!2sin!4v1622200038654!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label="Google Maps Location"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default ContactUs;
