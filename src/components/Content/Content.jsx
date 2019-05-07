import React from 'react';
import c from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import Feed from './Feed/Feed';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route } from 'react-router-dom';

const Content = () => {
  return (
    <main className={c.content}>
      <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
      <Route component={Profile} path='/profile' />
      <Route component={Messages} path='/dialogs' />
      <Route component={Feed} path='/feed' />
      <Route component={Music} path='/music' />
      <Route component={Settings} path='/settings' />
    </main>
  )
}

export default Content;