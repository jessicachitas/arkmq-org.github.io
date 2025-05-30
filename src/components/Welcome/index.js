import { useHistory, useNavigate } from "react-router-dom";
import welcomeLogo from "@site/static/img/arkmq-logo.png";
import welcomeLogoDark from "@site/static/img/arkmq-logo-darkmode.png";

export default function Welcome() {
  const history = useHistory();

  return (
    <>
      <div className="welcome viewport">
        <div className="welcome-info">
          <img className="welcome-logo" src={welcomeLogo} />
          <img className="welcome-logo-dark" src={welcomeLogoDark} />
          <h2 className="welcome-h2">
            A collection of container images that provide a way to deploy the
            Apache ActiveMQ Artemis Broker on Kubernetes
          </h2>
          <div className="button-group">
            <button
              className="static-button"
              onClick={() => history.push("/docs/getting-started/quick-start")}
            >
              Quick Start Guide here
            </button>
            <button
              className="static-button"
              onClick={() => history.push("/docs/contribute")}
            >
              Contribute to the project
            </button>

            <button
              className="static-button"
              onClick={() => history.push("/docs/getting-started")}
            >
              View documentation here
            </button>
          </div>
        </div>
        <div className="down-arrow">
        <a href="#about"><button className="down-arrow-button">&#8582;</button></a></div>
      </div>
    </>
  );
}
