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
                            <h4>    I started my way into the tech field when I was in the sixth grade learning about making game servers. I eventually decided to attend a Junior College with the plan to acquire a Computer Science Degree. I was only doing a bunch of general ed classes and basic coding classes. I wanted to learn more about the tech industry and the different roles within it. I didn't know anything about the industry. Whenever I asked they were more focused on transferring rather than actually caring about job placement. This leads me to take a year off of College and enrolling in a coding boot camp. I eventually got accepted at Galvanize in Seattle. The program focused on learning about web development and some computer science fundamentals. It taught me so many skills such as working with other software engineers in pair programming, writing readable code, how to focus my attention on the right problems, how to ask the right questions, asking for help when I need it, and most of all how to teach myself to learn new concepts on my own. After my receiving my certificate and learning a lot about the different fields in computer science I decided to go back to school. I then transferred to the Academy of Art University In San Francisco pursuing a Bachelors's Degree In Computer Programming. In addition, I still practice web development using modern-day frameworks such as React, typescript, express.js, and postgres working on personal and private projects.</h4>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Body;