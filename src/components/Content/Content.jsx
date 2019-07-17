import React from 'react';
import c from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import MessagesContainer from './Messages/MessagesContainer';
import Feed from './Feed/Feed';
import UsersContainer from './Users/UsersContainer';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route, Redirect } from 'react-router-dom';


const Content = () => {
  return (
    <main className={c.content}>
      <img className={c.main_bg} src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" alt="" />
      <Redirect from="/" to="/profile" />
      <Route render={ () => <ProfileContainer />} path='/profile/:userId?' />
      <Route render={ () => <UsersContainer />} path='/users' />
      <Route render={ () => <MessagesContainer />} path='/dialogs' />
      <Route render={ () => <Feed />} path='/feed' />
      <Route render={ () => <Music />} path='/music' />
      <Route render={ () => <Settings />} path='/settings' />
    </main>
  )
}

export default Content;