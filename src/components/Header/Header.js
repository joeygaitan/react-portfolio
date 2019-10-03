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
                    <h1>Jose Gaitan</h1>
                    <p className="itemText">Software Engineer</p>
                </div>
                <div className="icons">
                    <div className="linkedn">
                        <h3>linkedn</h3>
                    </div>
                    <div className="GitHub">
                        <h3>GitHub</h3>
                    </div>
                    <div className="Medium">
                        <h3>Medium</h3>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Header;