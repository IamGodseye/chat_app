import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";

import { auth } from "../firebase";

const LoginForm = () => {
  return (
    <>
      <div id="login-page">
        <div id="login-card">
          <h1 className="title">Welcome to React-Chat-App🚀🚀</h1>
          <div
            className="login-button google glow-on-hover"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            <GoogleOutlined /> Sign in with Google
          </div>
          <br /> <br />
          <div
            className="login-button facebook glow-on-hover"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
          >
            <FacebookOutlined /> Sign in with Facebook
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
