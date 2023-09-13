import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from '../src/utils/Yelp';

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className="App">
      <header>
          <h1 className="logo text-center">ravenous</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} />
      </main>
    </div>
  );
}

export default App;
