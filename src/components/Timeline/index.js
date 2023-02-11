import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Timeline extends Component {

  generateSections() {
    if (!this.props.setions) {
      return null;
    }

    return this.props.setions.map(function (section, i) {
      const { badges, mainBadges, contain, title, type, years, logo, link } = section;

      const mainTechs = mainBadges.map((technology, i) => {
        return (
          <Badge pill className="main-badge mr-2 mb-2" key={i}>
            {technology}
          </Badge>
        );
      });
      const tech = badges.map((badge, i) => {
        return (
          <Badge pill className="badge mr-2 mb-2" key={i}>
            {badge}
          </Badge>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={years}
          iconStyle={{
            // background: "#0B78FF",
            // background: "rgba(11, 120, 255, .1)",
            background: "#FFFFFF",
            color: "#fff",
            textAlign: "center",
          }}
          icon={
            // <i className={`fa ${type == 'work' ? 'fa-briefcase' : 'fa-building-columns'} experience-icon`}></i>
            // this.renderIcon()
            <a href={link} target="_blank" >
              <img
                src={logo}
                alt={title}
                className="w-[52px] h-[52px] rounded-full z-[2]"
              />
            </a>
          }
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTechs}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {contain}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  render() {
    const { id, sectionName } = this.props;

    return (
      <section id={id} className="sect-pt4 pb-5 time-line">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        {/* <div>
          <span className="vertical-timeline-element-icon bounce-in">
            <i className="fa fa-graduation-cap mx-auto experience-icon"></i>
          </span>
        </div> */}
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            <VerticalTimelineElement
              iconStyle={{
                // background: "#AE944F",
                background: "#0B78FF",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className={`fa ${id == "experience" ? "fa-paper-plane-o" : "fa-graduation-cap"} mx-auto experience-icon`}></i>
              }
            />
            {this.generateSections()}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Timeline;
