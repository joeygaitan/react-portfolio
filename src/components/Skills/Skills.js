import React, { Component } from 'react';
import '../../css/skills.css';
import { ReactComponent as SdCard } from './sdchip.svg';
 
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                javascript:[],
                react: [],
                Redux: [],
                Git: [],
                CSS: [],
                AJAX: [],
                express: [],
                unity: [],
                illustrator: [],
                svg: []
         }
    }

    render() { 
        console.log(this.state.javascript)
        return ( 
        <div ref={this.props.refSkills}>
                <div className="skills">
                    <div className='rating'>
                        <p>Javascript</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                    </div>
                    <div className='rating'>
                        <p>React.js</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                    </div>
                    <div className='rating'>
                        <p>Redux</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                    </div>
                    <div className='rating'>
                        <p>Git</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                    </div>
                    <div className='rating'>
                        <p>CSS</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                    </div>
                    <div className='rating'>
                        <p>AJAX</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                    </div>
                    <div className='rating'>
                        <p>Express.js (MVC)</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                        <SdCard />
                    </div>
                    <div className="rating">
                        <p>Unity Engine</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                        <SdCard />
                    </div>
                    <div className="rating">
                        <p>Adobe Illustrator</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                        <SdCard />
                    </div>
                    <div className="rating">
                        <p>SVG</p>
                        <SdCard className="sdCardScored"/>
                        <SdCard className="sdCardScored"/>
                        <SdCard />
                        <SdCard />
                        <SdCard />
                    </div>
                </div>
        </div> );
    }
}
 
export default Skills;