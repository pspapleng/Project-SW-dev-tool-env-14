import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <Box
    maxWidth='1920'
    sx={{ mr: 3, mt: '20%', display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}
    >
      <Typography
        noWrap
        component="div"
        sx={{ fontSize: 48, color: '#908E89' }}
      >
        404 Not Found
      <Button component={Link}  sx={{
        display: 'block', textAlign: 'center', color: '#908E89', textTransform: 'capitalize', fontSize: '.4em',
        ':hover': {
          bgcolor: 'transparent',
          color: '#34343434'
        },
        }} to='/Home'>
        Go Home
      </Button>
      </Typography>
    </Box>
  );
}

export default NotFound;
