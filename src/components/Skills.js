import React, { Component } from "react";

class Skills extends Component {
  render() {
      const sectionName = ['Skills'];
      const skillsName = ['HTML 5', 'CSS 3', 'JavaScript', 'ReactJS', 'NodeJS', "Bootstrap", "MongoDB", "PostgreSQL", "MySQL"];

    return (
      <>
      <section id="skills">
          <div className="container">

            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">{sectionName}</span>
              </h1>
            </div>

            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-html5-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[0]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-css3-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[1]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-javascript-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[2]}</ul>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-react-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[3]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-nodejs-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[4]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-bootstrap-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[5]}</ul>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-mongodb-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[6]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-postgresql-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[7]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-mysql-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[8]}</ul>
                </div>
              </div>
            </div>

          </div>
        </section>

      </>
    );
  }
}

export default Skills;
