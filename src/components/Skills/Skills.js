import React, { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div ref={this.props.refSkills}>
                <div className="skills">
                    <p >Javascript</p>
                    <p>Node.js</p>
                    <p>React.js</p>
                    <p>Redux</p>
                    <p>CSS</p>
                    <p>AJAX</p>
                    <p>Express.js (MVC)</p>
                </div>
        </div> );
    }
}
 
export default Skills;