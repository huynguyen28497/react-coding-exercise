import React from 'react';
import { Typography } from '@mui/material';
import { ROOT } from 'navigation/CONSTANT';
import { Link } from 'react-router-dom';

interface Props {}

const NotFound = (props: Props) => {
  return (
    <div>
      {/* Page Not Found! */}
      <Link to={ROOT}>
        <h1>Home</h1>
      </Link>
      <Typography variant="h2">404: page not found!</Typography>
    </div>
  );
};

export default NotFound;
