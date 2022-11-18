import React from 'react';
import './ProjectCardComponent.css'

class ProjectCardComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showDescription: false
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        return {
            name: props.name,
            description: props.description,
            image: props.image,
            platform: props.platform,
            link: props.link,
            background: props.background
        };
    }

    showTitle()
    {
        this.setState({showDescription: false});
    }

    showDescription()
    {
        this.setState({showDescription: true});
    }

    goToLink(link)
    {
        window.open(link);
    }

    render()
    {
        return (
            <div className="project-card-body" onMouseLeave={() => this.showTitle()} onClick={() => this.showDescription()}>
                {(this.state.showDescription) ? //if true title
                <div>
                    <h1 className="project-title">
                        {this.state.name}
                    </h1>
                    <p className="project-description">
                        {this.state.description}
                    </p>
                    {(this.state.link !== undefined) ? //Show github button if provided link
                    <button className="project-link" onClick={() => this.goToLink(this.state.link)}>
                        {this.state.platform}
                    </button>
                    : 
                    <div></div> //else do nothing
                    }
                </div>
                : //else false description
                <div style={{cursor: "pointer"}}>
                    <h1 className="project-title">
                        {this.state.name}
                    </h1>
                    <img className="projet-image" src={this.state.image} alt={this.state.name + " Image"}/>
                </div>
                }
            </div>
        );
    }
}
export default ProjectCardComponent;