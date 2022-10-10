import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectDetailsModalTwo from "./ProjectDetailsModalTwo";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      detailsModalShowTwo: false
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalShowTwo = (data) => {
      this.setState({ detailsModalShowTwo: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    let detailsModalCloseTwo = () => this.setState({ detailsModalShowTwo: false });

    const sectionName = 'Main Projects';
    const projectTitle = ['Lord of the Strings', 'Simply SupplyChain'];
    const projectDate = ['2022'];

    return (
      <><div
        className="col-sm-12 col-md-6 col-lg-4"

        style={{ cursor: "pointer" }}
      >

      </div>
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{ }</div>
            </div>
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow()}>
                <div>
                  <img
                    src={require("./../images/supplyChainHome.png")}
                    alt="projectImages"
                    height="200"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }} />
                  <br />
                  <span style={{ color: "black" }} className="project-date">{projectDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projectTitle[1]}
                  </p>
                </div>
              </div>

              <div className="foto" onClick={() => detailsModalShowTwo()}>
                <div>
                  <img
                    src={require('./../images/tennisMain.png')}
                    alt="projectImages"
                    height="255"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }} />
                  <br />
                  <span className="project-date" style={{ color: "black" }}>{projectDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projectTitle[0]}
                  </p>
                </div>
              </div>

            </span>
            <ProjectDetailsModal
              show={this.state.detailsModalShow}
              onHide={detailsModalClose}
              data={this.state.deps} />

            <ProjectDetailsModalTwo
              show={this.state.detailsModalShowTwo}
              onHide={detailsModalCloseTwo}
              data={this.state.deps} />
          </div>
        </section></>
    );
  }
}

export default Projects;
