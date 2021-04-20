import React from 'react';
import { Button, Paper } from '@material-ui/core';
import './loginPage.css';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const rootUrl = 'https://oauth-passport-demo.herokuapp.com';

const LoginPage = () => {
  const handleLoginGoogle = () => {
    window.open(`${rootUrl}/auth/google`, '_self');
  };

  const handleLoginGithub = () => {
    window.location.href = `${rootUrl}/auth/github`;
  };

  const handleLoginFacebook = () => {
    window.open(`${rootUrl}/auth/facebook`, '_self');
  };

  return (
    <div className='container'>
      <Paper className='paper'>
        <h1>Login page</h1>
        <Button
          startIcon={<PersonPinIcon />}
          variant='contained'
          color='secondary'
          onClick={handleLoginGoogle}
          style={{ margin: '5px' }}
        >
          Login with google
        </Button>
        <Button
          startIcon={<GitHubIcon />}
          variant='contained'
          color='default'
          onClick={handleLoginGithub}
          style={{ margin: '5px' }}
        >
          Login with github
        </Button>
        <Button
          startIcon={<FacebookIcon />}
          variant='contained'
          color='primary'
          onClick={handleLoginFacebook}
          style={{ margin: '5px' }}
        >
          Login with facebook
        </Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
