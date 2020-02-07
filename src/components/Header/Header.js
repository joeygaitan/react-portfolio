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
                        <a href='https://www.linkedin.com/in/joey-gaitan/' style={{color:'#2867B2'}}><h3>linkedn</h3></a>  
                    </div>
                    <div className="GitHub">
                        <a href='https://github.com/joeygaitan' style={{color:'black'}}><h3>GitHub</h3></a>
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