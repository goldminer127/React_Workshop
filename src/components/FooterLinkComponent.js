import './FooterLinkComponent.css'

const FooterLinkComponent = (props) => {

    const goToLink = (link) =>
    {
        window.open(link);
    }

    return(
        <div className="footer-button" onClick={() => goToLink(props.link)}>
            <img className="footer-image" src={props.image} alt={props.platform + " footer link"}/>
            {props.platform}
        </div>
    );
}
export default FooterLinkComponent;