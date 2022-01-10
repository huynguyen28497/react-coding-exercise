import React from 'react';
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
      <h2>404: page not found!</h2>
    </div>
  );
};

export default NotFound;
