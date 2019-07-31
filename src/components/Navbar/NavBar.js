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
                    <p className="buttonText">Home</p>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <p className="buttonText">Skills</p>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <p className="buttonText">About</p>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <p className="buttonText">Work</p>
                </div>
                <div className="buttonItem">
                    <Dot className="dotSvg"/>
                    <p className="buttonText">Contact</p>
                </div>
            </div>
        </div> );
    }
}
 
export default NavBar;