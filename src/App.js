import React, { Component } from 'react';
import NavBar from './components/Navbar/NavBar'
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
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
    this.project = React.createRef();
    this.contact = React.createRef();
  } 
  
  scrollToRef = ref => {
    if (ref === 'home')
    
      window.scrollTo({
        top: this.home.current.offsetParent,
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
    if (ref === 'project')
      window.scrollTo({
        top: this.project.current.offsetTop,
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
          <NavBar scrollToRef={this.scrollToRef}/>
          <Header  refHome={this.home}/>
          <Skills refSkills = {this.skills}/>
          <Body refAbout ={this.about}/>
          <Projects refProject ={this.project}/>
          <Footer refContact={this.contact}/>
      </div>
    );
  }
}

export default App;
