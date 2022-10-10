import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    const sectionName = 'Main Projects';
    const projectTitle = ['Lord of the Strings', 'Simply SupplyChain'];
    const projectDate = ['2022'];

    // const [projectInfo, setInfo] = useState([
    //   {
    //     title: "Simply SupplyChain", 
    //     startDate: "2022", 
    //     description: "Simply SupplyChain is a fullstack web application, designed to help the users to learn about one of the fundamentals of international business terminologies with additional features of implemnting the learnt terms into real news/aritcles",
    //     images: ["./../images/supplyChainHome.png", "./../images/supplyChainTerms.png"],
    //     url: "https://simply-supplychain.herokuapp.com/"
    //   },
    //   {
    //     title: "Lord of the Strings", 
    //     startDate: "2022", 
    //     description: "One of my first fully built app based on HTML Canvas game. Lord of the Strings is a dynamic 2D tennis simulation game that allows the players/users to use the racket to move up or down to hit a moving ball. To win the game",
    //     images: ["./../images/tennisMain.png", "./../images/tennisWins.png"],
    //     url: "https://aidenvalley.github.io/Lord-of-the-Strings/"
    //   }
    //   ]);
   

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
              <div className="row mx-auto">{}</div>
            </div>
            <span className="portfolio-item d-block">
          <div className="foto" onClick={() => detailsModalShow()}>
            <div>
              <img
                src={ require("./../images/projectOne.png")}
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
            <div>
              <img
                src= { require('./../images/projectTwo.png')}
                alt="projectImages"
                height="120"
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
          </div>
        </section></>
    );
  }
}

export default Projects;
