import React, { Component } from 'react';
// import './css/app.css'
import NavBar from './components/Navbar/NavBar'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Projects from './components/projects/Projects';
import Footer from './components/Footer/Footer';
import './css/app.css'
class App extends Component {
  render() {
    return (
      <div id="wrapper">
          <NavBar/>
          <Header/>
          <Body/>
          <Projects/>
          <Footer/>
      </div>
    );
  }
}

export default App;
