import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;