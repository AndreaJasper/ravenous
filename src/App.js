import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1 className="logo text-center">ravenous</h1>
        </header>
        <main>
          <SearchBar />
          <BusinessList />
        </main>
      </div>
    );
  }
}

export default App;
