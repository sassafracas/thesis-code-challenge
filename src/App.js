import React, { Component } from 'react';
import './App.css';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
