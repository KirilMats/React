import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Aside />
      <Content />
    </div>
  );
}

export default App;