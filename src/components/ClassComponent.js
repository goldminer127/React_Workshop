import React from "react"
import Peach from "../assets/Peach.jpg"

class ClassComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showMain: true
        };
    }

    switchMain()
    {
        this.setState({showMain: !this.state.showMain});
    }

    render()
    {
        return(
            <div style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%"}}>
                <h1 onClick={this.switchMain.bind(this)}>Click me to change the content below</h1>
                <div style={{width: "50rem"}}>
                    {this.state.showMain ? <p>Funny text here</p> : <img src={Peach} alt="Peach" style={{width: "100%"}}/>}
                </div>
            </div>
        );
    }
}
export default ClassComponent;