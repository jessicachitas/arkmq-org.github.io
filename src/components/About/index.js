export default function About() {
  return (
    <div className="show-for-mobile about about-viewport blue-theme" id="about">
      <div className="about-grid">
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
  );
}
