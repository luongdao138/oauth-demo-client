import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './navbar.css';
import axios from 'axios';
import { useGlobalContext } from '../../context';

const rootUrl = 'https://oauth-passport-demo.herokuapp.com';

const Navbar = () => {
  const { user } = useGlobalContext();
  const logout = async () => {
    try {
      await axios.get(`${rootUrl}/auth/logout`, {
        withCredentials: true,
      });
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppBar position='static'>
      <Toolbar className='toolbar'>
        <Link to='/'>
          <Typography>Home</Typography>
        </Link>
        {!user && (
          <Link to='/login'>
            <Typography>Login</Typography>
          </Link>
        )}
        {user && (
          <Button variant='text' onClick={logout}>
            <Typography>Logout</Typography>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
