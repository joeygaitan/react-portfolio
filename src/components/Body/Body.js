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
                            <h4>    I started my way into the tech field when 
                                I was in the sixth grade learning about making game servers. 
                                After trying to teach myself I decided to go an organized
                                 way of learning, so I attended a Junior College with the
                                  plan to acquire a Computer Science Degree. However, while
                                   In College I decided I wanted more of an Applied path for
                                    learning computer science. That’s when I decided to apply
                                     to coding boot camps. I eventually got into one and started 
                                     attending Galvanize in Seattle. The program focused on learning 
                                     about web development and some computer science fundamentals. 
                                     It taught me many skills such as working with other software 
                                     engineers in Agile Based Sprints, writing readable code, how to 
                                     focus my attention on the right problems, how to ask the right questions,
                                      asking for help when I need it, how to parse online documentation, 
                                      and most of all how to teach myself new concepts. 3 months of
                                       learning wasn't quite enough for me. That is when I decided to 
                                       apply to a school that teaches you practical skills. 
                                       I am now attending Make School In San Francisco 
                                       getting a Bachelors Degree In applied Computer 
                                       Science Native applications, 
                                       and Fullstack Development, and Data Science</h4>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Body;