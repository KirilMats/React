import React from 'react';
import c from './Content.module.css';
import Profile from './Profile/Profile';
import MessagesContainer from './Messages/MessagesContainer';
import Feed from './Feed/Feed';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route } from 'react-router-dom';

const Content = (props) => {
  return (
    <main className={c.content}>
      <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
      <Route render={ () => <Profile store={props.store} />} path='/profile' />
      <Route render={ () => <MessagesContainer store={props.store} />} path='/dialogs' />
      <Route render={ () => <Feed />} path='/feed' />
      <Route render={ () => <Music />} path='/music' />
      <Route render={ () => <Settings />} path='/settings' />
    </main>
  )
}

export default Content;