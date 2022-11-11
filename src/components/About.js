import React, { Component } from "react";
import { Icon } from "@iconify/react";
import nodejs from "@iconify/icons-logos/nodejs";
import reactIcon from "@iconify/icons-logos/react";
import postgresql from "@iconify/icons-logos/postgresql";
import documentPdf from "@iconify/icons-carbon/document-pdf";

class About extends Component {
  render() {
    const sectionName = ["About Me"];
    const hello = ["Hello to Everyone!"];
    const about = [
      "I develop abstract ideas and turn them into cohesive designs, delivering the best scalable, stable, and high-quality platform.",
      "I am a former Customs Entry Writer and Digital Marketer that chose to pursue my passion. General Assembly provided me with a full spectrum of skills and coaching that will allow me to effectively develop a world-class user experience.",
      "If you are seeking a top-rated web developer, please Git to know me.",
    ];

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
            <span>
              <a href="https://drive.google.com/file/d/1X1jAoTQt7wz8VjAfg66IWKhihaRvKMAw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Icon
                  icon={documentPdf}
                  width="30"
                  height="30"
                  className="ml-4 cursor:wait"
                  />
              </a>
            </span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={require("./../images/myProfile.jpg")}
                  />
                  <Icon
                    icon={nodejs}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={postgresql}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave h5-responsive">{hello}</span>
                    <br />
                    <br />
                    <span className="h4 ">{about}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
