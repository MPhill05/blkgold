import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import MusicPage from './pages/music/music.component';
import StorePage from './pages/store/store.component';
import TourPage from './pages/tour/tour.component';
import ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/music' component={MusicPage} />
        <Route path='/store' component={StorePage} />
        <Route path='/tour' component={TourPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
