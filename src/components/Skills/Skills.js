import React, { Component } from 'react';
import '../../css/skills.css';
import { ReactComponent as Sdcard } from './sdcard.svg';
 
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rank: {
                "javascript":4,
                "react":4,
                "Redux":3,
                "Git":4,
                "CSS":3,
                "AJAX":4,
                "express":3,
                "unity":2,
                "illustrator":2,
                "svg":2
            }
         }
    }

    rankBuilder = (selection) => {
        let value = this.state.rank[selection]
        
        for(let i = 0;i<value;i += 1){
            
        }
    }

    render() { 
        return ( 
        <div ref={this.props.refSkills}>
                <div className="skills">
                    <div className='rating'>
                        <p>Javascript</p>
                        <Sdcard className="sdCard"/>
                        <div className="square">6</div>
                    </div>
                    <div className='rating'>
                        <p>React.js</p><div className="square">5</div>
                    </div>
                    <div className='rating'>
                        <p>Redux</p>
                            <div className="square">

                            </div>
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
                        <p>Express.js (MVC)</p>{()=>this.rankBuilder('express')}
                    </div>
                    <div className="rating">
                        <p>Unity Engine</p>
                    </div>
                </div>
        </div> );
    }
}
 
export default Skills;