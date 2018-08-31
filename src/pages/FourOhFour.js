import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => {
  return (
    <div>
      <h1>404</h1>
      <p>i can't find this page</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default FourOhFour;
