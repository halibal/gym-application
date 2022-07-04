import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt="logo" width="200px" height="40px" />
                <Typography variant='h6' pb="40px" mt="20px">
                    Created by <a href="https://www.linkedin.com/in/halilalgul/" target="_blank" rel="noopener noreferrer">Halil ALGUL</a> with the help of <a href="https://www.youtube.com/c/JavaScriptMastery" target="_blank" rel="noopener noreferrer">Javascript Master</a>
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer