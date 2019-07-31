import React, { Component } from 'react';
import NavBar from './components/Navbar/NavBar'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Projects from './components/projects/Projects';
import Footer from './components/Footer/Footer';

import './css/app.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
    this.home = React.createRef();
    this.skills = React.createRef();
    this.about = React.createRef();
    this.work = React.createRef();
    this.contact = React.createRef();
  } 
  
  scrollToRef = ref => {
    if (ref === 'home')
      window.scrollTo({
        top: this.home.current.offsetTop,
        behavior: 'smooth'
      });
    if (ref === 'skills')
      window.scrollTo({
        top: this.skills.current.offsetTop,
        behavior: 'smooth'
      });
    if (ref === 'about')
      window.scrollTo({
        top: this.about.current.offsetTop,
        behavior: 'smooth'
      });
    if (ref === 'work')
      window.scrollTo({
        top: this.work.current.offsetTop,
        behavior: 'smooth'
      });
    if (ref === 'contact')
      window.scrollTo({
        top: this.contact.current.offsetTop,
        behavior: 'smooth'
      });
  };

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
