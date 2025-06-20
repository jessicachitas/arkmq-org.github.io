import { useHistory } from "react-router-dom";
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
              onClick={() => history.push("/arkmq-org.github.io/docs/getting-started/quick-start")}
            >
              Quick Start Guide here
            </button>
            <button
              className="static-button"
              onClick={() => history.push("/arkmq-org.github.io/docs/contribute")}
            >
              Contribute to the project
            </button>

            <button
              className="static-button"
              onClick={() => history.push("/arkmq-org.github.io/docs/")}
            >
              View documentation here
            </button>
          </div>
          <div className="about-grid hide-for-mobile">
                    <div className="about-section-1">
                      <h1 className="about-header">Cloud Orientated</h1>
                      <p className="about-text" role="paragraph">
                        The ability to quickly deploy and run the broker as a container
                        image
                      </p>
                    </div>
                    <div className="about-section-2">
                      <h1 className="about-header">Kubernetes</h1>
                      <p className="about-text" role="paragraph">
                        The ability to run a Kubernetes native container on Kubernetes
                      </p>
                    </div>
                    <div className="about-section-3">
                      <h1 className="about-header">Operator</h1>
                      <p className="about-text" role="paragraph">
                        The operator based solution to manage the Kubernetes deployment
                      </p>
                    </div>
                    <div className="about-section-4">
                      <h1 className="about-header">Examples</h1>
                      <p className="about-text" role="paragraph">
                        A suite of examples to demonstrate each feature
                      </p>
                    </div>
                    <div className="about-section-5">
                      <h1 className="about-header">CI/CD</h1>
                      <p className="about-text" role="paragraph">
                        Continuous intergration and deployment for quick development
                      </p>
                    </div>
                  </div>
        </div>
      </div>
    </>
  );
}
