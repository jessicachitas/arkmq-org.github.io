import logo from "@site/static/img/logo-square.png";
import icon from "@site/static/img/gravity-ui--persons.png";

export default function Welcome() {
  return (
    <>
      <div className="welcome viewport">
        <div className="welcome-info">
          <h1 className="header">ArkMQ</h1>
          <h2 className="welcome-h2">
            A collection of container images that provide a way to deploy the
            Apache ActiveMQ Artemis Broker on Kubernetes
          </h2>
          <ul className="list-buttons">
            <li>
              <button className="static-button" href="#">
                <img className="icon" src={icon} alt="Button 1"></img>
                Quick Start Guide here
              </button>
            </li>
            <li>
              <button className="static-button" href="#">
                <img className="icon" src={icon} alt="Button 2"></img>
                Contribute to the project
              </button>
            </li>
            <li>
              <button className="static-button" href="#">
                <img className="icon" src={icon} alt="Button 3"></img>
                View documentation here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
