import React, { Component } from "react";
import { Icon } from "@iconify/react";
import bamboo from "@iconify/icons-logos/bamboo";
import aws from "@iconify/icons-logos/aws";
import postgresql from "@iconify/icons-logos/postgresql";
import documentPdf from "@iconify/icons-carbon/document-pdf";

class About extends Component {
  render() {
    const sectionName = ["About Me"];
    const hello = ["Hello to Everyone!"];
    const about = [
      "Hello! I'm a DevOps Engineer with a passion for AWS cloud technology and a background in development.",
      "I specialize in crafting seamless IT solutions that bridge the gap between coding and operations. My expertise lies in architecting scalable AWS infrastructures and streamlining workflows.",
      "I'm all about finding creative solutions to complex problems, and I thrive in collaborative environments. Let's innovate together and make amazing things happen in the cloud! please Git to know me.",
    ];

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
            <span>
              {/* <a href="https://drive.google.com/file/d/1CqZxEAg0nMeBEEsdmSTt5DlI_nPqUnf9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Icon
                  icon={documentPdf}
                  width="30"
                  height="30"
                  className="ml-4 cursor:wait"
                  />
              </a> */}
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
                    icon={bamboo}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={aws}
                    style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
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
