import React, { Component } from 'react';
import '../../css/skills.css'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div ref={this.props.refSkills}>
                <div className="skills">
                    <div className='rating'>
                        <p>Javascript</p>
                        <div className="square">6</div>
                    </div>
                    <div className='rating'>
                        <p>React.js</p><div className="square">5</div>
                    </div>
                    <div className='rating'>
                        <p>Redux</p><div className="square">4</div>
                    </div>
                    <div className='rating'>
                        <p>Git</p><div className="square">3</div>
                    </div>
                    <div className='rating'>
                        <p>CSS</p><div className="square">2</div>
                    </div>
                    <div className='rating'>
                        <p>AJAX</p><div className="square">1</div>
                    </div>
                    <div className='rating'>
                        <p>Express.js (MVC)</p><div className="square">0</div>
                    </div>
                </div>
        </div> );
    }
}
 
export default Skills;