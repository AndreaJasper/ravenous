import React from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="container-fluid text-center">
            <h1 className="logo">ravenous</h1>
          </div>
        </header>
        <main>
          <SearchBar />
          <BusinessList />
          {/* <Business /> */}
        </main>
      </div>
    );
  }
}

export default App;
