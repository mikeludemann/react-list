import React from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/list';

const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Mary Watson" },
  { id: 3, name: "Dave Beck" },
  { id: 4, name: "Brooke Tyson" }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <List elements={data} />
      </section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
    </div>
  );
}

export default App;
