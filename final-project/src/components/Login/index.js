import React, { useState, useContext } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';

import { AccountContext } from '../Account';
import Pool from '../../common/UserPool';

const Login = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isForgotPass, setIsForgotPass] = useState(false);
  const [stage, setStage] = useState(0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState();

  const { authenticate, signUp } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();
    if (!isSignUp) {
      login();
    } else {
      if (!isConfirm) {
        signUp(email, password).then(data => {
          props.updateUser(data);
          setIsConfirm(true);
        }).catch(err => {
          setError('Failed to sign up!');
        });
      } else {
        const user = new CognitoUser({
          Username: props.user.email,
          Pool: Pool,
        });
    
        user.confirmRegistration(code, true, (err, data) => {
          if (err) {
            setError('Confirm failed!!!');
          } else {
            login();
          }
        });
      }
    }
  };

  function login() {
    authenticate(email, password).then(data => {
      props.updateUser(data, "LOGIN");
    }).catch(err => {
      setError('Failed to login!');
    });
  }

  function updateIsSignUp(value) {
    setIsSignUp(value);
    props.setHeader(value ? "Sign Up" : "Login");
    if (isForgotPass) {
      setIsForgotPass(false);
    }
  }

  function updateIsForgotPass(value) {
    setIsForgotPass(value);
    
    if (value) {
      props.setHeader("Forgot your password?");
    }
  }

  function renderSignUpLink() {
    if (!isSignUp) {
      return (
        <React.Fragment>
          <div className="sign-up">
            <span>Need an account? </span>
            <a href="#" onClick={ () => updateIsSignUp(!isSignUp) }>Sign up</a>
          </div>
          { isForgotPass ? null : (
              <div className="sign-up">
                <a onClick={ () => updateIsForgotPass(!isForgotPass) }>Forgot your password?</a>
              </div>
            )
          }
        </React.Fragment>
      );
    } else {
      return (
        <div className="sign-up">
          <span>Already have an account? </span>
          <a onClick={ () => updateIsSignUp(!isSignUp) }>Sign in</a>
          {/* <a href={awsActions.getAwsCognitoSignUpURL()}>Sign up</a> */}
        </div>
      );
    }
  }

  function renderVerificationCode() {
    return (
      <div className={`form-group ${!isSignUp && !isForgotPass ? 'disabled' : ''}`}>
        <label>Verification Code</label>
        <input
          type="text"
          className="form-control"
          name="code"
          id="code"
          placeholder="Your Verification Code"
          disabled={isSignUp && !isConfirm}
          required={isConfirm}
          value={code}
          onChange={event => setCode(event.target.value)}
        />
      </div>
    );
  }

  function renderEmail() {
    return (
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Your Email"
          data-rule="email"
          data-msg="Please enter a valid email"
          disabled={isSignUp && isConfirm}
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
    );
  }

  function renderPassword() {
    return (
      <div className="form-group">
        <label>Password</label>
        <input
          id="password"
          name="password"
          className="form-control"
          type="password"
          placeholder="Password"
          disabled={isSignUp && isConfirm}
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
      </div>
    );
  }

  function renderConfirmPassword() {
    return (
      <div className="form-group">
        <label>Password</label>
        <input
          id="confirm-password"
          name="confirm-password"
          className="form-control"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
      </div>
    );
  }

  function renderFields() {
    return (
      <React.Fragment>
        { renderEmail() }
        { renderPassword() }
      </React.Fragment>
    );
  }

  function renderError() {
    return (
      <div className="error-message">
        { error }
      </div>
    );
  }

  function renderLoginForm() {
    return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
          { renderFields() }
          { isSignUp ? renderVerificationCode() : null }
          { renderError() }
          <div className="group-btn">
            <button
              className="btn-shutter-out-horizontal"
              type='submit'
            >
              { !isSignUp ? "Login" : (isConfirm ? "Confirm" : "Sign Up") }
            </button>
            <button
              className="btn-shutter-out-horizontal"
              onClick={props.closeLoginPopup}
            >
              Cancel
            </button>
          </div>
        </form>
        { renderSignUpLink() }
      </React.Fragment>
    );
  }

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool
    });
  };

  function sendCode(event) {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: data => {
        console.log("onSuccess:", data);
      },
      onFailure: err => {
        console.error("onFailure:", err);
      },
      inputVerificationCode: data => {
        console.log("Input code:", data);
        setStage(2);
        setPassword("");
      }
    });
  }

  function resetPassword(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords are not the same!!!")
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: data => {
        console.log("onSuccess:", data);
        setError("");
        setIsForgotPass(false);
      },
      onFailure: err => {
        console.error("onFailure:", err);
        setError("Confirm Password Failed!!!");
      }
    });
  }

  function renderFogotForm() {
    if (stage == 2) {
      return (
        <form onSubmit={resetPassword}>
          { renderVerificationCode() }
          { renderPassword() }
          { renderConfirmPassword() }
          { renderError() }
          <div className="group-btn">
            <button type="submit" className="btn-shutter-out-horizontal">
              Change password
            </button>
          </div>
        </form>
      );
    }
    return (
      <div>
        <form onSubmit={sendCode}>
          { renderEmail() }
          <div className="error-message">
            { error }
          </div>
          <div className="group-btn">
            <button
              className="btn-shutter-out-horizontal"
              type='submit'
            >
              Reset my password
            </button>
            <button
              className="btn-shutter-out-horizontal"
              onClick={props.closeLoginPopup}
            >
              Cancel
            </button>
          </div>
        </form>
        { renderSignUpLink() }
      </div>
    );
  }

  return (
    <div>
      { isForgotPass ? renderFogotForm() : renderLoginForm() }
    </div>
  )
};

export default Login;