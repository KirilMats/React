import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

function App({ state, addPost }) {

  return (
    <div className="App">
      <Header />
      <Aside state={state} />
      <Content state={state} addPost={addPost} />
    </div>
  );
}

export default App;