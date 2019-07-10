import React, { Component } from 'react';
import '../../css/navbar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
        <div className="container">
            <img className="dot" src={require("./dot.svg")}/>
            <h3>Home</h3>
            <h3>Skills</h3>
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Contact</h3>
            
        </div> );
    }
}
 
export default NavBar;