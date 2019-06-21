import React, { Component } from 'react';
import "../../css/footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="footerContainer">
                <p>Email: joeygaitan707@gmail.com</p>
                <p>Cell Phone Number: 7074957284</p>
                <p>linkedn</p>
                <p>message me here!</p>
            </div>
        </div> );
    }
}
 
export default Footer;