import React, { Component } from 'react'
import bella from "./notsub.svg";
import bellb from "./sub.svg";
export class NewComp extends Component {
    styles={
    fontStyle:"italic",
    color:"purple"
  }
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Subscribe to Narc services"
             , sub:"Subscribe"
             ,imageURL:bella
        };
    }
    Buttonchange=()=>{
            this.setState({message:"Please Press Bell Icon",sub:"Subscribed"})
    }
    imageChange=()=>{
        this.setState({message:"Thank you ! Happy Learning",imageURL:bellb})
    }
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img style={{width:"30px",height:"30px"}} src={this.state.imageURL} onClick={this.imageChange} alt="" srcset="" />
            </div>
        )
    }
}

export default NewComp
