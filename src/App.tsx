import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UrlClass } from './components/ClassComponent';
import { UrlFunc } from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <UrlClass/>
      <UrlFunc/>
    </div>
  );
}

export default App;
