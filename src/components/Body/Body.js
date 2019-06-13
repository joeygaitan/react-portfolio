import React, { Component } from 'react';
import '../../css/body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "container">
                <div className="languageBar">
                    <p>Javascript</p>
                    <p>Node.js</p>
                    <p>React.js</p>
                    <p>Redux</p>
                    <p>CSS</p>
                    <p>AJAX</p>
                    <p>Express.js (MVC)</p>
                </div>  
                <div className="innerContainer">
                    <div className="item1">

                    </div>
                    <div className="item2">

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Body;