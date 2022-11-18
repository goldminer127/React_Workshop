const FunctionalComponentWithParameters = (props) =>
{
    return (
        <div>
            <h1 style={{color: (props.color === undefined) ? "black" : props.color}}>{(props.text === undefined) ? "Default Text" : props.text}</h1>
        </div>
    );
}
export default FunctionalComponentWithParameters;