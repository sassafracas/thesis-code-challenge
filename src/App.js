import React, { Component } from 'react';
import './App.css';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default App;
