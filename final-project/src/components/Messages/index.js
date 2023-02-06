import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import awsActions from "../../actions/AwsActions";

function Messages(props) {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const userInfo = props.user;
    if (!_.isEmpty(userInfo)) {
      const { email, idToken } = userInfo;
      awsActions.getMessagesByEmail(email, idToken).then(messages => {
        setMessages(messages);
        setLoading(false);
      });
    }
  }, []);

  function handleClose() {
    props.closePopup(false);
  }

  function renderTables() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Contain</th>
            <th>Datetime</th>
          </tr>
        </thead>
        <tbody>
          { _.isEmpty(messages) ? renderEmptyRows() : renderRows() }
        </tbody>
      </Table>
    );
  }

  function renderEmptyRows() {
    return (
      <tr className="blank_row empty-rows">
        <td colSpan="4">
          {
            !loading ? "No Messages" : (
              <i className="spinner-border loading-icon"></i>
            )
          }
        </td>
      </tr>
    );
  }

  function renderRows() {
    return (
      <React.Fragment>
        {
          messages.map(message => {
            const { name, subject, contain, datetime } = message;
            return (
              <tr key={datetime}>
                <td>{name}</td>
                <td>{subject}</td>
                <td>{contain}</td>
                <td>{datetime}</td>
              </tr>
            );
          })
        }
      </React.Fragment>
    );
  }

  return (
    <Modal className="message-table" show={props.show} onHide={handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>Messages</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderTables()}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Messages;