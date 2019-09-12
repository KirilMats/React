import React from 'react';
import c from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import MessagesContainer from './Messages/MessagesContainer';
import Feed from './Feed/Feed';
import UsersContainer from './Users/UsersContainer';
import Settings from './Settings/Settings';
import { Route, Redirect } from 'react-router-dom';
import MusicContainer from './Music/MusicContainer';
import Login from './Login/Login';


const Content = () => {
  return (
    <main className={c.content}>
      <img className={c.main_bg} src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" alt="" />
      <Route render={ () => <ProfileContainer />} path='/profile/:userId?' />
      <Route render={ () => <UsersContainer />} path='/users' />
      <Route render={ () => <MessagesContainer />} path='/dialogs' />
      <Route render={ () => <Feed />} path='/feed' />
      <Route render={ () => <MusicContainer />} path='/music' />
      <Route render={ () => <Settings />} path='/settings' />
      <Route render={ () => <Login />} path="/login" />
    </main>
  )
}

export default Content;