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
            
            <div>
                <Dot className="blue"/>
                <h3>Home</h3>
            </div>
            
            <h3>Skills</h3>
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Contact</h3>
            
        </div> );
    }
}
 
export default NavBar;