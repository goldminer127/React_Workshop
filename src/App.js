import BodyComponent from './components/BodyComponent'
import FooterLinkComponent from './components/FooterLinkComponent';
import './App.css';

function App()
{
  return (
    <div>
      <div id="banner"/>
      <div id="main-display">
        <div id="logo-container">
          <img id="peach-logo" src="/assets/peach.png" alt="logo"/>
        </div>
        <div id="title-container">
          <div id="title-text-wrapper">
            <h1 className="title-text">
              Brandon Tiev
            </h1>
            <h3 className="title-text">
              Software Engineer
            </h3>
          </div>
        </div>
      </div>
      <BodyComponent />
      <div id="footer">
        <div id="footer-links-container">
          <FooterLinkComponent platform="Github" image="/assets/media/github.png" link="https://github.com/goldminer127"/>
          <FooterLinkComponent platform="Linkedin" image="/assets/media/linkedin.png" link="https://www.linkedin.com/in/brandon-tiev/"/>
        </div>
      </div>
    </div>
  );
}

export default App;
