import React from 'react'
import NavButton from './NavButton';
import ProjectCardComponent from './ProjectCardComponent';
import './BodyComponent.css'

//Component used strictly for states, not for reusability
class BodyComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            display: "home"
        }
    }

    setDisplay(view)
    {
        this.setState({display: view});
    }

    render()
    {
        return (
            <div id="body">
                <div id="navigation-container">
                    <div id="navigation-button-container">
                        <NavButton onClick={() => this.setDisplay("home")} text="Who Am I"/>
                        <NavButton onClick={() => this.setDisplay("projects")} text="Projects"/>
                    </div>
                </div>
                {(this.state.display === "home") ? //if
                    <div id="description-container">
                        <h1>About Me</h1>
                        <p style={{width: "50%"}}>
                            I am a computer science student at SUNY Albany looking to be a Software Engineer. I am the current chair for the UAlbany IEEE Student Branch. Here is a peach.
                        </p>
                        <br/>
                            <br/>
                        <br/>
                        <p style={{width: "50%"}}>
                            Here is some filler text because I don't know what else to put. So here are some words from my secretary.<br/><br/>👋I'm Kiran and I am currently a student at the University at Albany pursuing a B.S. in Computer Science and Applied Mathematics and a B.A. in Mathematics.
                        </p>
                        <img id="about-me-image" src="/assets/me.jpg" alt="It is me"/>
                    </div>
                    : //else
                    <div id="project-cards-container">
                        <ProjectCardComponent name="GameTime" description="A discord bot that comes with many text-based games." image="/assets/projects/gametime.jpg" platform="Discord" link="https://discord.com/api/oauth2/authorize?client_id=730129569960427531&permissions=128849341520&scope=bot"/>
                        <ProjectCardComponent name="TShell" description="Adds commands to computer craft turtles to simplify automation tasks. Commands are split into individual modules based on their class types." image="/assets/projects/tshell.png" platform="Github" link="https://github.com/goldminer127/TShell"/>
                        <ProjectCardComponent name="IEEE Website" description="The main website used for the IEEE Student UAlbany Student Branch." image="/assets/projects/ieee.png" platform="Website" link="https://ieeeualbany.org/"/>
                    </div>
                }
            </div>
        );
    }
}
export default BodyComponent;