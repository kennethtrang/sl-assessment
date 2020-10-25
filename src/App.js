import React from 'react';
import NavBar from './components/NavBar';
import ItemContent from './containers/ItemContent';
import './styles/App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <ItemContent />
  </div>
);

export default App;
