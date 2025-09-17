import React from "react";

const credlyLink = 'https://www.credly.com/badges/8136a928-dad4-4519-a369-ee79194b80a8/linked_in?t=t2k82e';
const certImage = 'https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png';

class Certification extends React.Component {

  generateAWSAssociateCert() {
    return (
      <a className="img" href={credlyLink} target="_blank" rel="noopener noreferrer">
        <img src={certImage} alt="AWS Certified Solutions Architect – Associate" />
      </a>
    );
  }

  render() {
    return (
      <section id="certifications" className="certifications-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Certifications</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            {this.generateAWSAssociateCert()}
          </div>
        </div>
      </section>
    );
  }
}

export default Certification;
