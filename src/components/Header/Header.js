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
            <div className="wrapper" ref={this.props.refHome}>
                <div className="item1">
                    <h1>Jose <br/>Gaitan</h1>
                    <p className="itemText">Software Engineer</p>
                </div>
                <div className="icons">
                    <p>
                        hello
                    </p>
                </div>
            </div>
        </div> );
    }
}
 
export default Header;