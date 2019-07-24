import React, { Component } from 'react';
import '../../css/navbar.css'
import { ReactComponent as Dot } from './dot.svg';


class NavBar extends Component {
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
        <div className="container">
            <div className="icon+Spacer">
            
            </div>
            <div className="Buttons">
                <div className="home">
                    <Dot className="dotSvg"/>
                    <h3>Home</h3>
                </div>
                <div className="skills">
                    <Dot className="dotSvg"/>
                    <h3>Skills</h3>
                </div>
                <div className="about">
                    <Dot className="dotSvg"/>
                    <h3>About</h3>
                </div>
                <div>
                    <Dot className="dotSvg"/>
                    <h3>Work</h3>
                </div>
                <div>
                    <Dot className="dotSvg"/>
                    <h3>Contact</h3>
                </div>
            </div>
        </div> );
    }
}
 
export default NavBar;