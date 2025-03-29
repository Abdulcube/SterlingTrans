// HeroSection.tsx
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LandingPage from '../../assets/LandingPage.png';
export const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: LandingPage, // Change to your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff',
      }}
    >


      <Stack
        
        sx={{
          height: '100%',
          position: 'relative',
          zIndex: 2,
          px: 4,
        }}
        alignItems="center"
      >
        {/* Left Column: Logo */}
        <Stack   sx={{ textAlign: 'center' }}>
          <Box component="img"
            src="/your-logo.png" // Replace with your logo path
            alt="Logo"
            sx={{ width: '150px', maxWidth: '80%', mb: 2 }}
          />
        </Stack>

        {/* Right Column: Text */}
        <Stack  sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Your Site Name
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            A tagline or short description goes here.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

