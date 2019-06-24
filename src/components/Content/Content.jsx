import React from 'react';
import c from './Content.module.css';
import Profile from './Profile/Profile';
<<<<<<< HEAD
import UsersContainer from './Users/UsersContainer';
=======
>>>>>>> 24e2f29ffa1b956c6d681ee70d6e5fe7e38dc34c
import MessagesContainer from './Messages/MessagesContainer';
import Feed from './Feed/Feed';
import Users from './Users/Users';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { Route } from 'react-router-dom';

<<<<<<< HEAD

=======
>>>>>>> 24e2f29ffa1b956c6d681ee70d6e5fe7e38dc34c
const Content = () => {
  return (
    <main className={c.content}>
      <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
      <Route render={ () => <Profile />} path='/profile' />
<<<<<<< HEAD
      <Route render={ () => <UsersContainer />} path='/users' />
=======
      <Route render={ () => <Users />} path='/users' />
>>>>>>> 24e2f29ffa1b956c6d681ee70d6e5fe7e38dc34c
      <Route render={ () => <MessagesContainer />} path='/dialogs' />
      <Route render={ () => <Feed />} path='/feed' />
      <Route render={ () => <Music />} path='/music' />
      <Route render={ () => <Settings />} path='/settings' />
    </main>
  )
}

export default Content;