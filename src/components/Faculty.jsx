import React from 'react';
import { useSelector } from 'react-redux';
import { selectSchool } from '../features/schoolSlice';
import { Box, Container, Typography, Paper, Avatar } from '@mui/material';
import { Person, School, Work } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Keyframes for animations
const slideInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};



const zoomEffect = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const Faculty = () => {
  const faculty = useSelector(selectSchool).faculty;

  return (
    <Container sx={{ backgroundColor: '#f9fbe7', paddingY: 6, borderRadius: 2 }}>
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h1" gutterBottom color="#2e7d32">
          Meet Our Faculty
        </Typography>
        <Box>
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={slideInBottom}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.div
                whileHover="hover"
                variants={zoomEffect}
                style={{ marginBottom: 20 }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    padding: 3,
                    borderRadius: 2,
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <Avatar
                    src={`https://source.unsplash.com/random/100x100?person=${index}`}
                    alt={member.name}
                    sx={{ width: 120, height: 120, marginRight: 3, border: '2px solid #4caf50' }}
                  />
                  <Box>
                    <Typography variant="h5" color="#388e3c">{member.name}</Typography>
                    <Typography variant="subtitle1" color="#555">
                      <Person color="action" /> {member.position}
                    </Typography>
                    <Typography variant="body1" color="#666">
                      <School color="action" /> Qualification: {member.qualification}
                    </Typography>
                    <Typography variant="body1" color="#666">
                      <Work color="action" /> Experience: {member.experience}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Faculty;
