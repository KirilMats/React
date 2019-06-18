import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Aside store={props.store} />
      <Content store={props.store} />
    </div>
  );
}

export default App;