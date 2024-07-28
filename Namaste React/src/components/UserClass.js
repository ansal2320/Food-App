import React from "react";

class UserClass extends React.Component{

    constructor(){
        super();
    
        this.state={
            userInfo: {
                name : "None",
                id : "None",

            }
        }

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ansal2320");

        const json=await data.json();

        console.log(json);

        this.setState({
            userInfo:json,
        })
    }
   
    render(){
       return(
         <div className="user-card">
            <img className="user-pic" src={this.state.userInfo.avatar_url}></img>
            <h2> Name: {this.state.userInfo.name} </h2>
            <h3> Id: {this.state.userInfo.id} </h3>
            <h3> Bio: {this.state.userInfo.bio} </h3>
            
         </div>
       );
    };
};

export default UserClass;