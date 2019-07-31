import React, { Component } from 'react';
import '../../css/navbar.css'
import { ReactComponent as Dot } from './dot.svg';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }


    
    render() { 
        return (
        <div className="container">
            <div className="icon+Spacer">
            
            </div>
            <div className="Buttons">
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <h4 className="buttonText">Home</h4>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <h4 className="buttonText">Skills</h4>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <h4 className="buttonText">About</h4>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <h4 className="buttonText">Work</h4>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <h4 className="buttonText">Contact</h4>
                </div>
            </div>
        </div> );
    }
}
 
export default NavBar;