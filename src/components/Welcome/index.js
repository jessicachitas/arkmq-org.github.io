import welcomeLogo from "@site/static/img/arkmq-logo.png"

export default function Welcome() {
  return (
    <>
      <div className="welcome viewport">
        <div className="welcome-info">
          <img className="welcome-logo" src={welcomeLogo}/>
          <h2 className="welcome-h2">
            A collection of container images that provide a way to deploy the
            Apache ActiveMQ Artemis Broker on Kubernetes
          </h2>
          <div className="button-group">
            <button className="static-button" href="#">
              Quick Start Guide here
            </button>
            <button className="static-button" href="#">
              Contribute to the project
            </button>
            <button className="static-button" href="#">
              View documentation here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
