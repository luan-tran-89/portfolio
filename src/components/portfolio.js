import React from "react";

import cc1 from "../img/cc/image_1.png";
import cc2 from "../img/workflow.svg";
import cc4 from "../img/cc/image_4.png";
import cc5 from "../img/cc/image_5.png";

import bdt1 from "../img/bdt/image_1.png";
import bdt2 from "../img/bdt/image_2.png";
import bdt3 from "../img/bdt/image_3.png";
import bdt4 from "../img/bdt/image_4.jpeg";
import bdt5 from "../img/bdt/image_5.png";

import ea1 from "../img/ea/image_1.jpeg";
import ea2 from "../img/ea/image_2.png";
import ea3 from "../img/ea/image_3.svg";
import ea4 from "../img/ea/image_4.png";
import ea5 from "../img/ea/image_5.png";
import ea6 from "../img/ea/image_6.png";
import ea7 from "../img/ea/image_7.png";


class Portfolio extends React.Component {

  generateCC() {
    return (
      <div className="col-md-4">
        <div className="work-box">
          <a href={cc1} data-lightbox="gallery-vmarine">
            <div className="work-img">
              <img src={cc1} alt="" className="img-fluid" />
            </div>
          </a>

          <div className="work-content">
            <div className="row">
              <div className="col-sm-10">
                <h2 className="w-title">My Website in the AWS cloud</h2>
                <div className="w-more">
                  <span className="w-ctegory">
                    AWS Lambda - Dynamodb - Route53
                    <br />
                    S3 - IAM - API Gateway - CloudFront
                    <br />
                    HTML5 - CSS3 - Bootstrap - ReactJS
                  </span>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="w-like">
                  <a className="git-icon" href="https://github.com/luan-tran-89/cs516" target="_blank" rel="noopener noreferrer" >
                    <i className="ion-social-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <a
            href={cc2}
            data-lightbox="gallery-vmarine"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={cc4}
            data-lightbox="gallery-vmarine"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={cc5}
            data-lightbox="gallery-vmarine"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
        </div>
      </div>
    );
  }

  generateBDT() {
    return (
      <div className="col-md-4">
        <div className="work-box">
          <a href={bdt1} data-lightbox="gallery-aguadeluz">
            <div className="work-img">
              <img src={bdt1} alt="" className="img-fluid" />
            </div>
          </a>

          <div className="work-content">
            <div className="row">
              <div className="col-sm-10">
                <h2 className="w-title">The revolution of electric vehicle</h2>
                <div className="w-more">
                  <span className="w-ctegory">
                    Kafka - Spark Streaming / SQL
                    <br />
                    Hive - Visualization with Tableau
                  </span>{" "}
                </div>
              </div>
              <div className="col-sm-2">
                <div className="w-like">
                  <a className="git-icon" href="https://github.com/luan-tran-89/cs523" target="_blank" rel="noopener noreferrer" >
                    <i className="ion-social-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <a
            href={bdt2}
            data-lightbox="gallery-aguadeluz"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={bdt3}
            data-lightbox="gallery-aguadeluz"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={bdt5}
            data-lightbox="gallery-aguadeluz"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={bdt4}
            data-lightbox="gallery-aguadeluz"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
        </div>
      </div>
    );
  }

  generateEA() {
    return (
      <div className="col-md-4">
        <div className="work-box">
          <a href={ea1} data-lightbox="gallery-todo">
            <div className="work-img">
              <img src={ea1} alt="" className="img-fluid" />
            </div>
          </a>

          <div className="work-content">
            <div className="row">
              <div className="col-sm-10">
                <h2 className="w-title">Movie Rating Portal</h2>
                <div className="w-more">
                  <span className="w-ctegory">
                    Java - Microservices - OAuth 2 Server
                    <br />
                    Vault - RabbitMQ and Kafka
                    <br />
                    Swagger - Circuit Breaker Pattern
                  </span>
                  {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                </div>
              </div>
              <div className="col-sm-2">
                <div className="w-like">
                  <a className="git-icon" href="https://github.com/EA-course-MIU/Movie-Rating-Portal" target="_blank" rel="noopener noreferrer">
                    <i className="ion-social-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
          <a
            href={ea2}
            data-lightbox="gallery-todo"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={ea3}
            data-lightbox="gallery-todo"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={ea4}
            data-lightbox="gallery-todo"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={ea5}
            data-lightbox="gallery-todo"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={ea6}
            data-lightbox="gallery-todo"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
          <a
            href={ea7}
            data-lightbox="gallery-todo"
            style={{ display: "none" }}
          >
            jsx-a11y/anchor-has-content warning
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="projects" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  The projects which I've done in my university
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.generateCC()}
            {this.generateBDT()}
            {this.generateEA()}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
