import React, { useEffect, useState, useContext } from "react";
import { PopupMenu } from "react-simple-widgets";
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';

import { AccountContext } from '../Account';
import Utils from "../../common/Utils";

import Messages from "../Messages";
import Login from "../Login";

const UserInfo = (props) => {
  const [header, setHeader] = useState("Login");
  const [user, setUser] = useState(Utils.getUserInfo());
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(data => {
      const token = _.get(data, 'idToken.jwtToken');
      const info = Utils.getUserInfo(token);
      if (info) {
        setUser(info);
      }
    });
  }, []);

  function renderUserIcon() {
    const { email } = user;
    return (
      <PopupMenu>
        <i className="fa fa-circle-user user-icon"></i>

        <div className="card text-start">
          <div className="card-body px-4 py-4">
            <div id="circle-avatar" className="text-center mx-auto mb-4">
              <span>{email.charAt(0).toUpperCase()}</span>
            </div>

            <p className="text-center mb-2">{email}</p>

            <hr />

            {/* <p
              className="mb-0"
              style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
            >
              ROLES
            </p>
            <p style={{ fontSize: 12 }}>
              {["Submitter", "Project manager", "Change control board"].join(
                ", "
              )}
            </p>

            <hr className="mb-0" style={{ margin: "0 -24px 0" }} /> */}

            <div
              className="list-group list-group-flush"
              style={{ margin: "0 -24px 0" }}
            >
              <button className="list-group-item list-group-item-action px-4" onClick={() => { setShow(!show) }}>
                <small>View Messages</small>
              </button>
              {/* <button className="list-group-item list-group-item-action px-4">
                <small>View Profile</small>
              </button>
              <button className="list-group-item list-group-item-action px-4">
                <small>View Card</small>
              </button> */}
            </div>

            <hr style={{ margin: "0 -24px 24px" }} />

            <div className="d-grid text-center">
              <button className="btn-shutter-out-horizontal" onClick={userLogout}>
                <small>Logout</small>
              </button>
            </div>
          </div>
        </div>
      </PopupMenu>
    );
  }

  function userLogout() {
    logout();
    Utils.removeCookie("idToken");
    setUser({});
  }

  function closePopup() {
    setShow(!show);
  }

  function closeLoginPopup() {
    setShowLogin(!showLogin);
  }

  function updateUser(data, state) {
    if (data) {
      let info;
      if (state == "LOGIN") {
        const token = _.get(data, 'idToken.jwtToken');
        info = Utils.getUserInfo(token);
      } else {
        const { username, pool} = data.user;
        info = {
          userId: data.userSub,
          email: username,
          clientId: pool.clientId
        };
      }
      
      if (info) {
        setUser(info);
      }
    }
    switch (state) {
      case "LOGIN":
      case "CONFIRM":
        closeLoginPopup();
        break;
      default:
        break;
    }
    
  }

  function showMessages() {
    return (
      <Messages
        show={show}
        closePopup={closePopup}
        user={user}
      />
    );
  }

  function renderLoginForm() {
    return (
      <Modal className="login-form" show={showLogin} onHide={closeLoginPopup} animation={false}>
        <Modal.Header>
          <Modal.Title>{ header }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login
            closeLoginPopup={closeLoginPopup}
            updateUser={updateUser}
            user={user}
            setHeader={setHeader}
          />
        </Modal.Body>
      </Modal>
    );
  }
  
  function renderUserInfo() {
    if (_.isEmpty(user)) {
      return (
        <a className="nav-link" 
          onClick={() => { setShowLogin(!showLogin) }}
        >
          Sign in
        </a>
      );
    }
    return renderUserIcon();
  }

  return (
    <div className="user-info">
      { renderUserInfo() }
      { show ? showMessages(): null}
      { showLogin ? renderLoginForm() : null }
    </div>
  );
}

export default UserInfo;