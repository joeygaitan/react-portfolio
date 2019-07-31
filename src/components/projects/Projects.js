import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div ref={this.props.refProject}>
            <p>
                projects
            </p>
        </div> );
    }
}
 
export default Projects;