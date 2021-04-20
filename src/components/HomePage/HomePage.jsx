import React from 'react';
import { useGlobalContext } from '../../context';

const HomePage = () => {
  const { user } = useGlobalContext();
  return (
    <div>
      {user ? (
        <h1>Welcome back {user.username}</h1>
      ) : (
        <h1>Welcome to my website</h1>
      )}
    </div>
  );
};

export default HomePage;
