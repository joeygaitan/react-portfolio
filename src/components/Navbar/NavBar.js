import React, { Component } from 'react';
import '../../css/navbar.css'
import { ReactComponent as Dot } from './dot.svg';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected: "",
            chosenSelection: [ 
                [ "home", "#0000"],
                [ "skills", "#0000"],
                [ "about", "#0000"],
                [ "project", "#0000"],
                [ "contact", "#0000"]
            ]
        }
    }

    update = (selection) => {
            if(selection !== this.state.selected && this.state.selected !== ''){
                this.setState(state=>{
                    const navbarItems = state.chosenSelection.map((item)=>{
                        if (item[0] === selection) {
                           return item[1] = "#5AE2EB"
                        } else {
                            return item[1] = "#0000"
                        }
                    })
                    return navbarItems
                })
                this.setState({
                    selected:selection
                })
            } else {
                this.setState({
                    selected: selection
                })
                this.setState(state=>{
                    const navbarItems = state.chosenSelection.map((item)=>{
                        if (item[0] === selection) {
                           return item[1] = "#5AE2EB"
                        } else {
                            return item
                        }
                    })
                    
                    return navbarItems
                })
            }

        this.props.scrollToRef(selection)
    }
    
    render() { 
        
        return (
        <div className="container">
            <div className="icon+Spacer">
            
            </div>
            <div className="Buttons">
                <div className="buttonItem active" onClick={() => this.update("home")}>
                    <Dot className="dotSvg" style={{fill:this.state.chosenSelection[0][1]}}/>
                    <p className="buttonText">Home</p>
                </div>
                <div className="buttonItem active" onClick={()=>this.update("skills")}>
                    <Dot className="dotSvg" style={{fill:this.state.chosenSelection[1][1]}}/>
                    <p className="buttonText">Skills</p>
                </div>
                <div className="buttonItem active" onClick={()=>this.update("about")}>
                    <Dot className="dotSvg" style={{fill:this.state.chosenSelection[2][1]}}/>
                    <p className="buttonText">About</p>
                </div>
                <div className="buttonItem active" onClick={()=>this.update("project")}>
                    <Dot className="dotSvg" style={{fill:this.state.chosenSelection[3][1]}}/>
                    <p className="buttonText">Projects</p>
                </div>
                <div className="buttonItem active" onClick={()=>this.update("contact")}>
                    <Dot className="dotSvg" style={{fill:this.state.chosenSelection[4][1]}}/>
                    <p className="buttonText">Contact</p>
                </div>
            </div>
        </div> );
    }
}
 
export default NavBar;