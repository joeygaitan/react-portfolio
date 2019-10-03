import React, { Component } from 'react';
import '../../css/body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
            <div className = "bodyContainer" ref={this.props.refSkills}> 
                <div className="innerContainer" ref={this.props.refAbout}>
                        <div className="education">
                            <h2>Intro</h2>
                        </div>
                        <div className="backStory">
                            <h4>I started my way into the tech field when I was in
                                the sixth grade learning about making game servers.
                                After trying to teach myself I decided to go an organized
                                way of learning, so I attended a Junior College with the plan
                                to acquire a Computer Science Degree. However, while In College
                                I decided I wanted more of a focused path for learning computer science.
                                That’s when I decided to apply to coding bootcamps. I eventually
                                got into one and started attending Galvanize in Seattle.
                                The program focused on learning about web development and some computer science
                                fundamentals. It taught me so many skills such as working with other software engineers, writing
                                readable code, how to focus my attention on the right problems, how to ask the right questions, asking 
                                for help when I need it, and most of all how to teach myself to learn new concepts on my own. Learning, problem-solving
                                , and computers have always been my passions, and I hope to never stop pursuing them.
                                 I am now attending the Make School In San Francisco getting a Bachelors Degree In applied Computer Science 
                                 learning IOS development, and Fullstack Development.</h4>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Body;