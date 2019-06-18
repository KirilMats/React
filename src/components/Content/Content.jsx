import React from 'react';
import c from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import Feed from './Feed/Feed';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route } from 'react-router-dom';

const Content = (props) => {
  return (
    <main className={c.content}>
      <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
      <Route render={ () => <Profile store={props.store} />} path='/profile' />
      <Route render={ () => <Messages store={props.store} />} path='/dialogs' />
      <Route render={ () => <Feed />} path='/feed' />
      <Route render={ () => <Music />} path='/music' />
      <Route render={ () => <Settings />} path='/settings' />
    </main>
  )
}

export default Content;