import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Content />
    </div>
  );
}

export default App;