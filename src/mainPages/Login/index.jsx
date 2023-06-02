import "./login.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonIcon from "@mui/icons-material/Person";

import { useAuth } from "../../";

import { useState } from "react";

export default function Login() {
  const [isSignedIn, setSignedIn] = useState(true);
  const [userSignUpDetails, setUserSignUpDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loginDetails, setLoginDetails] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const guestlogindetails = {
    loginEmail: "adarshbalika@gmail.com",
    loginPassword: "adarshbalika",
  };
  const guestSignupDetails = {
    email: "guestuser@gmail.com",
    password: "guestuser321123",
    firstName:"Atithi",
    lastName:'Dev'
  };
  const { signUpHandler, loginHandler } = useAuth();

  const handleInput = (e) => {
    const input = e.target.value;
    const prop = e.target.name;
    if (e.target.type === "checkbox") {
      setUserSignUpDetails({ ...userSignUpDetails, [prop]: e.target.checked });
    } else setUserSignUpDetails({ ...userSignUpDetails, [prop]: input });
  };
  const handleGuestLogin = (e) => {
    e.preventDefault()
    setLoginDetails(()=>guestlogindetails);
  };
  const handleGuestSignUp = (e) => {
    e.preventDefault()
    setUserSignUpDetails(()=>guestSignupDetails);
  };

  const handleLoginInput = (e) => {
    const input = e.target.value;
    const prop = e.target.name;
    console.log(input);
    if (e.target.type === "checkbox") {
      setLoginDetails({ ...loginDetails, [prop]: e.target.checked });
    } else setLoginDetails({ ...loginDetails, [prop]: input });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(userSignUpDetails, "signup");
    signUpHandler(userSignUpDetails);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };

  return (
    <>
      {isSignedIn ? (
        <section class="loginSection">
          <div className="formBox">
            <div className="formValue">
              <form>
                <h2>Login</h2>
                <div className="inputBox">
                  <MailOutlineRoundedIcon />
                  <input
                    type="email"
                    name="loginEmail"
                    id="loginEmail"
                    value={loginDetails.loginEmail}
                    required
                    onChange={handleLoginInput}
                  />
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="inputBox">
                  <LockOutlinedIcon />
                  <input
                    type="password"
                    name="loginPassword"
                    id="loginPassword"
                    value={loginDetails.loginPassword}
                    required
                    onChange={handleLoginInput}
                  />
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="rememberMe">
                    <input type="checkbox" name="rememberMe" id="rememberMe" />{" "}
                    Rememer Me{" "}
                  </label>
                  <span onClick={()=>{alert("Take a deep breath, and try to remember the password.\n Sorry we can't do anything about it :(")}}>
                    {" "}
                    Forgot Password ?
                  </span>
                </div>
                <div className="buttons" style={{ fontFamily: "abel" }}>
                  <button type="submit" onClick={handleLoginSubmit}>
                    Log in
                  </button>
                  <button type="submit" onClick={handleGuestLogin}>
                   Set as Guest
                  </button>
                </div>
                <div className="signUp">
                  <p>
                    Don't have an account?{" "}
                    <a
                      href="#"
                      onClick={() => {
                        setSignedIn(false);
                      }}
                    >
                      Sign Up...
                    </a>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section class="signUpSection">
          <div className="formBox">
            <div className="formValue">
              <form action="">
                <h2>Sign Up</h2>
                <div className="inputBox">
                  <PersonIcon />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={userSignUpDetails.firstName}
                    required
                    onChange={handleInput}
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="inputBox">
                  <PersonIcon />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={userSignUpDetails.lastName}
                    required
                    onChange={handleInput}
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="inputBox">
                  <MailOutlineRoundedIcon />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userSignUpDetails.email}
                    required
                    onChange={handleInput}
                  />
                  <label htmlFor="email">Set Email</label>
                </div>
                <div className="inputBox">
                  <LockOutlinedIcon />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={userSignUpDetails.password}
                    required
                    onChange={handleInput}
                  />
                  <label htmlFor="password">Set Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="acceptT&C">
                    <input
                      type="checkbox"
                      name="acceptT&C"
                      id="acceptT&C"
                      required
                      onChange={handleInput}
                    />
                    I Accept all Terms & Conditions{" "}
                  </label>
                </div>
                <div className="buttons">
                   <button type="submit" onClick={handleSignUpSubmit}>
                  Sign Up
                </button>

                <button onClick={handleGuestSignUp}>Set as Guest</button>
                </div>
               
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
