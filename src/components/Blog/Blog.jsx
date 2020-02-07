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
                Indie Devlog
            </h2>
        </div> );
    }
}
 
export default Blog;