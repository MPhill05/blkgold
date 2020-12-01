import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import MusicPage from './pages/music/music.component';
import TourPage from './pages/tour/tour.component';
import ContactPage from './pages/contact/contact.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/music' component={MusicPage} />
        <Route path='/tour' component={TourPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
