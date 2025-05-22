import Cloud from "@site/static/img/cloud-arrow-up-solid.png";
import Kubernetes from "@site/static/img/box-open-solid.png";
import Operator from "@site/static/img/user-solid.png";
import Example from "@site/static/img/copy-solid.png";
import CI from "@site/static/img/arrow-right-solid.png";

export default function About() {
  return (
    <div className="about about-viewport blue-theme" id="about">
      <div className="about-info">
        <div className="about-grid">
          <img
            className="about-cloud"
            src={Cloud}
            alt="About Graphic 1"
          ></img>
          <h1 className="about-header-1">Cloud Orientated</h1>
          <p className="about-text-1" role="paragraph">
            the ability to quickly deploy and run the broker as a container
            image
          </p>
          <img
            className="about-kubernetes"
            src={Kubernetes}
            alt="About Graphic 2"
          ></img>{" "}
          <h1 className="about-header-2">Kubernetes</h1>
          <p className="about-text-2" role="paragraph">
            The ability to run a Kubernetes native container on Kubernetes
          </p>
          <img
            className="about-operator"
            src={Operator}
            alt="About Graphic 3"
          ></img>{" "}
          <h1 className="about-header-3">Operator</h1>
          <p className="about-text-3" role="paragraph">
            The Operator based solution to manage the Kubernetes deployment
          </p>
          <img
            className="about-example"
            src={Example}
            alt="About Graphic 4"
          ></img>
          <h1 className="about-header-4">Examples</h1>
          <p className="about-text-4" role="paragraph">
            A suite of examples to demonstrate each feature
          </p>
          <img
            className="about-ci"
            src={CI}
            alt="About Graphic 5"
          ></img>
          <h1 className="about-header-5">CI/CD</h1>
          <p className="about-text-5" role="paragraph">
            Continuous intergration and deployment for quick development
          </p>
        </div>
      </div>
    </div>
  );
}
