import './NavButton.css';

const NavButton = (props) =>
{
    const buttonPressed = () =>
    {
        buttonPressedAnimation();
        props.onClick();
    }
    const buttonPressedAnimation = () =>
    {
        let button = document.getElementById(props.text + "button");
        button.animate([
            {backgroundColor: "rgba(255,255,255,0.80)"},
            {backgroundColor: "rgba(0,0,0,0)"},
        ], {duration: 500});
    }
    return (
        <button id={props.text + "button"} className="nav-button" onClick={buttonPressed}>
            <h1>{props.text}</h1>
        </button>
    );
}
export default NavButton;