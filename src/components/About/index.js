import React from "react";

import avata from "../../img/avata.jpg";

import StaticData from '../../common/StaticData';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: StaticData.getSkills(),
      skills1: StaticData.getSkills1(),
      about_me: StaticData.getAboutMe()
    };
  }

  renderSkills() {
    <div className="row skills">
      <div className="col-md-12">
        <div className="title-box-2">
          <h5 className="title title-left">SKILLS</h5>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="skill-mf">
              {this.state.skills.map(skill => {
                return (
                  <React.Fragment key={skill.id}>
                    <span>{skill.content}</span>{" "}
                    <span className="pull-right">
                      {skill.porcentage}
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: skill.porcentage }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-mf">
              {this.state.skills1.map(skill => {
                return (
                  <React.Fragment key={skill.id}>
                    <span>{skill.content}</span>{" "}
                    <span className="pull-right">
                      {skill.porcentage}
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: skill.porcentage }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row about-me">
                  <div className="col-md-12">
                    <div className="pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title title-left">About Me</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <img src={avata} alt="" className="avata" />
                        </div>
                        <div className="col-md-8">
                          {this.state.about_me.map(content => {
                            return (
                              <p className="lead" key={content.id}>
                                {content.content}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row profile">
                  <div className="col-md-12">
                    <div className="title-box-2">
                      <h5 className="title title-left">PROFILE</h5>
                    </div>
                    <ul className="info-list">
                      <li>
                        <strong>Fullname:</strong>
                        <span>Ba Luan Tran</span>
                      </li>
                      <li>
                        <strong>Job title:</strong>
                        <span>Full-stack Java Developer</span>
                      </li>
                      <li>
                        <strong>Website:</strong>
                        <span>www.simplelife.studio</span>
                      </li>
                      <li>
                        <strong>Email:</strong>
                        <span>luan.tran.2589@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="button-holder">
                    <a className="btn-shutter-out-horizontal  stroke smoothscroll js-scroll"
                      href="#contact"
                      role="button"
                    >
                      Contact Me
                    </a>
                    <a className="btn-shutter-out-horizontal "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1MX1YDlVvG6Y23eY5m5yvJ8RhpHsps2pv/view?usp=share_link"
                    >
                      Download Resume
                    </a>
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
