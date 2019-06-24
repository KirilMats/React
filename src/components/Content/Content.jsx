import React from 'react';
import c from './Content.module.css';
import Profile from './Profile/Profile';
import MessagesContainer from './Messages/MessagesContainer';
import Feed from './Feed/Feed';
import Users from './Users/Users';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route } from 'react-router-dom';

const Content = () => {
  return (
    <main className={c.content}>
      <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
      <Route render={ () => <Profile />} path='/profile' />
      <Route render={ () => <Users />} path='/users' />
      <Route render={ () => <MessagesContainer />} path='/dialogs' />
      <Route render={ () => <Feed />} path='/feed' />
      <Route render={ () => <Music />} path='/music' />
      <Route render={ () => <Settings />} path='/settings' />
    </main>
  )
}

export default Content;