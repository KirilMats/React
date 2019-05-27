import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state, addPost) => {
    ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} /></BrowserRouter>, document.getElementById('root'));
}

export default rerenderEntireTree;
