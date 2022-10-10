import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">
            <span className="m-4">
              <a href="https://www.linkedin.com/in/aiden-ha-yoon-jang" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </span>
            <span className="m-4">
              <a href="https://github.com/AidenValley" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </span>
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{""}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "Aiden Jang"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
