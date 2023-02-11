import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Links from "../Links";
import awsActions from "../../actions/AwsActions";

const defaultMessage = {
  name: "",
  subject: "",
  email: "",
  contain: "",
  phone: ""
}

const defaultModal = {
  show: false,
  contain: ""
}

const mapURL = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=52557+(e)&t=&z=14&ie=UTF8&iwloc=B&output=embed";

function Contact(props) {
  const [message, setMessage] = useState(defaultMessage);
  const [modal, setModal] = useState(defaultModal);
  const [errorMessage, setErrorMessage] = useState();
  

  function handleChange(event) {
    const { id, value } = event.target;
    setMessage((values) => ({
      ...values,
      [id]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (message.phone && !isValidPhoneNumber(message.phone)) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }
    
    awsActions.sendMessage(message).then(data => {
      setMessage(defaultMessage);
      setErrorMessage();
      setModal({
        show: true,
        contain: "The message sent successfully!!!",
      });
    }).catch(error => {
      setModal({
        show: true,
        contain: "The message sent failed!!!",
      });
    });
  }

  function handleClose() {
    setModal(defaultModal);
  }

  function isValidPhoneNumber(e) {
    return /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})(?:[ ]?(?:#|x)(\d+))?$/.test(e)
  }

  function renderModal() {
    return (
      <Modal show={modal.show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.contain}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Please enter your name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                required
                                value={message.name}
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                            <label>Email</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Please enter your  Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                required
                                value={message.email}
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <label>Phone Number (optional)</label>
                              <input
                                type="text"
                                className="form-control"
                                name="phone"
                                id="phone"
                                placeholder="Please enter your number"
                                required
                                value={message.phone}
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <label>Subject</label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Please enter Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                                required
                                value={message.subject}
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                            <label>Your Message</label>
                              <textarea
                                className="form-control"
                                name="contain"
                                id="contain"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                required
                                value={message.contain}
                                onChange={handleChange}
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 submit-btn">
                          <div className="error-message">{errorMessage}</div>
                          <button
                            type="submit"
                            className="btn-shutter-out-horizontal "
                            // onClick={(e) => handleSubmit(e)}
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                      <iframe className="map-iframe" title="Miu Map" src={mapURL}> </iframe>
                      <ul className="list-ico">
                        <li><span className="ion-ios-location"></span> 1000 N 4th St, Fairfield, Iowa 52557</li>
                        <li><span className="ion-ios-telephone"></span>(206) 593-7990</li>
                        <li><span className="ion-email"></span>luan.tran.2589@gmail.com</li>
                      </ul>
                    </div>
                    <Links />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                © 2023 Ba Luan Tran All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {renderModal()}
    </section>
  );
}

export default Contact;
