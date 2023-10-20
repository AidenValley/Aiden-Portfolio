import React, { Component } from "react";
import { Icon } from "@iconify/react";
import aws from "@iconify/icons-logos/aws";
import docker from "@iconify/icons-logos/docker";
import terraform from "@iconify/icons-logos/terraform";

class Skills extends Component {
  render() {
      const sectionName = ['Skills'];
      const skillsName = ['AWS','Docker', 'Terraform', 'HTML 5', 'CSS 3', 'JavaScript', 'ReactJS', 'NodeJS', "Bootstrap", "MongoDB", "PostgreSQL", "MySQL", "Python", "Flask", "Django"];

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
                  <Icon
                    icon={aws}
                    style={{ color:"white", fontSize: "500%" }}                    
                  />
                  <ul className="list-inline mx-auto skill-icon">{skillsName[0]}</ul>
                </div>
                <div className="col">
                  <Icon
                    icon={docker}
                    style={{ color:"white", fontSize: "500%" }}                    
                  />
                  <ul className="list-inline mx-auto skill-icon">{skillsName[1]}</ul>
                </div>
                <div className="col">
                  <Icon
                    icon={terraform}
                    style={{ color:"white", fontSize: "500%" }}                    
                  />
                  <ul className="list-inline mx-auto skill-icon">{skillsName[2]}</ul>
                </div>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-html5-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[3]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-css3-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[4]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-javascript-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[5]}</ul>
                </div>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-react-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[6]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-nodejs-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[7]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-bootstrap-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[8]}</ul>
                </div>
              </div>
            </div>
            <br/>

            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-mongodb-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[9]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-postgresql-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[10]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-mysql-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[11]}</ul>
                </div>
              </div>
            </div>

            <br/>
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <i className="devicon-python-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[12]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-flask-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[13]}</ul>
                </div>
                <div className="col">
                  <i className="devicon-django-plain" style={{ color:"white",fontSize: "500%" }} >
                  </i>
                  <ul className="list-inline mx-auto skill-icon">{skillsName[14]}</ul>
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
