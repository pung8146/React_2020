import React from 'react';
import logo from './logo.svg';
import './App.css';
import smallImage from './90.png';
import bigImage from './512.png'
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={bigImage} alt="big" />
        <img src={smallImage} alt="small" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
