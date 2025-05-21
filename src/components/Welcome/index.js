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
