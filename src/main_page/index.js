import React from 'react';
import logo from './logo.svg';
import './main_page.css';
import Header from './header';

let state = {}

const fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
    })
}

const determineFeaturedHouse = () => {
    if (this.allHouses) {
        const randomIndex = Math.floor(Math.random() * this.allHouses.length);
        const featuredHouse = this.allHouses[randomIndex];
        this.setState({ featuredHouse });
    }
}

function App() {
  return (
    <div className="container">
        <Header subTitle="Providing houses all over the  world" />
    </div>
  );
}

export default App;
