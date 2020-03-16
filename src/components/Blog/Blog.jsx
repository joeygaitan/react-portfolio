import React, { Component } from 'react';
import NavBar from '../Navbar/NavBar';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
            <NavBar/>
            <h1>
                Personal Blog about my experiences in the Tech industry.
            </h1>
            <h2>
            <strong>Unity Indie Devlog day 1:</strong> I've made two scenes. I constructed the foundation for 
            </h2>
            <p>Unity</p><p>#C#</p><p>C#-API-Call</p>
            
        </div> );
    }
}
 
export default Blog;