import React from "react";

import award from '../../img/award/TMA_Award.jpg';
import promotion from '../../img/award/Certificate_Of_Promotion.png';
import academic from '../../img/award/Certificate_Of_Academic_Excellence.png';

const awards = [
  {
    id: "academic-excellence",
    img: academic,
    alt: "Certificate of Academic Excellence",
    title: "Certificate of Academic Excellence",
    content: "June 2025"
  },
  {
    id: "tma-award",
    img: award,
    alt: "TMA Quarterly Start Performance",
    title: "TMA Quarterly Start Performance",
    content: "Quarter 1 - 2018"
  },
  {
    id: "tma-promotion",
    img: promotion,
    alt: "Certificate of Promotion",
    title: "Certificate of Promotion",
    content: "Jan 2018"
  },
];

class Award extends React.Component {

  generateContent() {
    return awards.map(({ id, img, alt, title, content }) => {
      return (
      <div id={id} className="col-md-4">
        <div className="work-box">
          <a href={img} data-lightbox="gallery-vmarine">
            <div className="work-img">
              <img src={img} alt={alt} className="img-fluid" style={{height: '300px'}} />
            </div>
          </a>

          <div className="work-content pl-2 pr-2" style={{ minHeight: 'unset'}}>
            <div className="row">
              <div className="col-sm-11">
                <h2 className="w-title">{title}</h2>
                <div className="w-more">
                  <span className="w-ctegory">
                    {content}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    })
  }

  render() {
    return (
      <section id="awards" className="awards-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Awards</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            {this.generateContent()}
          </div>
        </div>
      </section>
    );
  }
}

export default Award;
