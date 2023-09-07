import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1 className="logo text-center">ravenous</h1>
        </header>
        <main>
          <SearchBar />
          <BusinessList businesses={businesses} />
        </main>
      </div>
    );
  }
}

export default App;
