import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="container">
            <h2>Home</h2>
            <h2>Skills</h2>
            <h2>About</h2>
            <h2>Work</h2>
            <h2>Contact</h2>
        </div> );
    }
}
 
export default NavBar;