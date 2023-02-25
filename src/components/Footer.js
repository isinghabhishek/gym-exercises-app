import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#fff3f4'>
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img  src={Logo} alt="logo" width="300px" height="240px" />
        <Typography variant="h4" pb="40px" mt="20px">
          Made By ❤️ Abhishek Singh
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer