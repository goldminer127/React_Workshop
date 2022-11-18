import React from "react";

class ClassComponentWithParameters extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state)
    {
        return {
            text: (props.text === undefined) ? "Default Text" : props.text,
            color: (props.color === undefined) ? "black" : props.color,
        };
    }

    render()
    {
        return(
            <div>
                <h1 style={{color: this.state.color}}>{this.state.text}</h1>
            </div>
        );
    }
}
export default ClassComponentWithParameters;
