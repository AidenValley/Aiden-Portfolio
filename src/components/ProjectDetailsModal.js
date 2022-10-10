import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import techData from './../res_primaryLanguage.json';

class ProjectDetailsModal extends Component {
  render() {
    const technologies = ["NodeJS", "Bootstrap", "PostgreSQL" ];
    var title = ["Simply SupplyChain" ]
    var description = [ "Simply SupplyChain is a fullstack web application, designed to help the users to learn about one of the fundamentals of international business terminologies with additional features of implemnting the learnt terms into real news/aritcles"]
    var url = ["https://simply-supplychain.herokuapp.com/"]

    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              <img
                src={require("./../images/supplyChainHome.png")}
              />
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-description">{description}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{this.technologies}</ul>
            </div>
          </div>
        </div>
        <li className="list-inline-item mx-3" key={''}>
          <span>
            <div className="text-center">
              <i className="devicon-nodejs-plain" style={{ position:"relative", fontSize: "300%" }}>
                <p className="text-center" style={{ fontSize: "30%" }}>
                  {technologies[0]}
                </p>
              </i>
              <i className="devicon-bootstrap-plain" style={{ fontSize: "300%" }}>
                <p className="text-center" style={{ fontSize: "30%" }}>
                  {technologies[1]}
                </p>
              </i>
              <i className="devicon-postgresql-plain" style={{ fontSize: "300%" }}>
                <p className="text-center" style={{ fontSize: "30%" }}>
                  {technologies[2]}
                </p>
              </i>
            </div>
          </span>
        </li>
             
        
        
      </Modal>
      
    );
  }
}

export default ProjectDetailsModal;
