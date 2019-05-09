import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App({state}) {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Aside state={state} />
        <Content state={state} />
      </BrowserRouter>
    </div>
  );
}

export default App;