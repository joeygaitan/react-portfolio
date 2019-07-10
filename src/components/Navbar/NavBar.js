import React, { Component } from 'react';
import '../../css/navbar.css'
import { ReactComponent as Dot } from './dot.svg';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
        <div className="container">
            
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
            
        </div> );
    }
}
 
export default NavBar;