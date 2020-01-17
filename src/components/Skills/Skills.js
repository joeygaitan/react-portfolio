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
                    <div className="rating">
                        <p>Javascript</p>
                        <div className="square"></div>
                        
                    </div>
                    <div>
                        <p>React.js</p><div className="square"></div>
                    </div>
                    <div>
                        <p>Redux</p><div className="square"></div>
                    </div>
                    <div>
                        <p>Git</p><div className="square"></div>
                    </div>
                    <div>
                        <p>CSS</p><div className="square"></div>
                    </div>
                    <div>
                        <p>AJAX</p><div className="square"></div>
                    </div>
                    <div>
                        <p>Express.js (MVC)</p>
                    </div>
                </div>
        </div> );
    }
}
 
export default Skills;