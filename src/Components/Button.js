import React from "react";

class Button extends React.Component {

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return (
        <div>
            <button class="btn btn-dark" onClick = {this.addCounter}>Click Me!</button>
            <p class="fw-bold">Sad Boi Reax = {this.state.count}</p>
        </div>
        )
    }
}

export default Button