import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import {
  createUserWithEmailAndPassword,
  handleFbSignIn,
  handleGoogleSignIn,
  handleSignOut,
  initializeLoginFramework,
  resetPassword,
  signInWithEmailAndPassword,
} from "./LoginManager";
import { Button } from "react-bootstrap";
import "./Login.css";
import googleimg from "../../images/icons/google.png";
import fbimg from "../../images/icons/fb.png";

function Login() {
    const [newUser, setNewUSer] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
      password: "",
      photo: "",
      error: "",
      success: false,
    });
  
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    const googleSignIn = () => {
      handleGoogleSignIn().then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      });
    };
  
    const fbSignIn = () => {
      handleFbSignIn().then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      });
    };
  
    const signOut = () => {
      handleSignOut().then((res) => {
        setUser(res);
        setLoggedInUser(res);
      });
    };
  
    const handleBlur = (e) => {
      let isFormValid = true;
      if (e.target.name === "email") {
        isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if (e.target.name === "password") {
        const isPasswordsValid = e.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFormValid = isPasswordsValid && passwordHasNumber;
      }
      if (isFormValid) {
        /// [...cart, newItem]
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    };
  
    const handleSubmit = (e) => {

      //console.log(user.email, user.password);
      if (newUser && user.email && user.password) {
        createUserWithEmailAndPassword(user.name, user.email, user.password).then(
          (res) => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
          }
        );
      }
  
      if (!newUser && user.email && user.password) {
        signInWithEmailAndPassword(user.email, user.password).then((res) => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        });
      }
  
      e.preventDefault();
    };
  
  return (


    <div className="container p-5" style={{ textAlign: "center", padding:"5px" }}>
      <h1> <b>Login</b></h1>
      
      <label
        htmlFor="newUser"
        className=" btn btn-primary text-bg font-weight-bold m-3 p-3"
        style={{width: "77%"}}
      >
        Please check the box for sign up
        <input
        type="checkbox"
        className="checkbox ml-2"
        onChange={() => setNewUSer(!newUser)}
        name="newUser"
      />
      </label>
      <form className="login-form" onClick={handleSubmit}>
        <div class="form-group container">
          {newUser && (
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              class="form-control"
              placeholder="Your Name"
              required
            />
          )}
          <br />
          <input
            type="text"
            name="email"
            onBlur={handleBlur}
            class="form-control"
            placeholder="Your Email Address"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            class="form-control"
            placeholder="Your Password"
            required
          />
          <br />
          <input
            type="submit"
            className="btn btn-warning"
            style={{width: '62%'}}
            value={newUser ? "Sign Up" : "Sign in"}
          />
        </div>

        <Button className="btn btn-light" style={{width: '60%'}} onClick={() => resetPassword(user.email)}>
          Forget password
        </Button>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "created" : "Logged in"} successfully
          </p>
        )}
        <div className=" d-flex justify-content-sm-center row-1">
          <div className="cl-6 mr-3">
          {user.isSignedIn ? (
            <Button onClick={signOut}>
              Sign out
            </Button>
          ) : (
            <Button
              
              style={{ marginLeft: "0px", marginRight: "12px" }}
              onClick={googleSignIn}
            >
              <img src={googleimg} alt=""></img>
              Sign in using Google
            </Button>
          )}
          </div>
            <br />
          <div className="cl-6 ">
          <Button  onClick={fbSignIn}>
            <img src={fbimg} alt=""></img>
            Sign in using Facebook
          </Button>
          </div>
        </div>
      </form>

      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""></img>
        </div>
      )}
    </div>
  );
}

export default Login;
