import React, { Component } from 'react';
// import './css/app.css'
import NavBar from './components/Navbar/NavBar'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Projects from './components/projects/Projects';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div>
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
