import React, { Component } from 'react';
import './App.css';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div >
        <div className="App">
        <TopNavbar/>
        <Content />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
