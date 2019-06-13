import React, { Component } from 'react';
import '../../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div>
            <div className="wrapper">
                <div className="item1">
                    <h1>Jose Gaitan</h1>
                    <h2>Frontend Developer</h2>
                </div>
                <div className="item2">
                    <p>
                        hello
                    </p>
                </div>
            </div>
        </div> );
    }
}
 
export default Header;