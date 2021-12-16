import React from "react";

class Button extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        );

    }



render(){
    return( 
    <div>
     <button class="btn btn-dark" onClick = {this.addCounter} >Click mo to</button>
    <p>counts = {this.state.count}</p>
    </div>
    );
}

}



export default Button