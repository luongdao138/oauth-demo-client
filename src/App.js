import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
