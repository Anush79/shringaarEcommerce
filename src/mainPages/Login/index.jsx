import './login.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PersonIcon from '@mui/icons-material/Person';

import { useAuth } from '../../'


import { useState } from 'react';

export default function Login() {

  const [isSignedIn, setSignedIn] = useState(true)
  const [userSignUpDetails, setUserSignUpDetails] = useState({ email: "", password: "", firstName: "", lastname: "" });
  const [loginDetails, setLoginDetails] = useState({ loginEmail: "", loginPassword: "" });

  const { signUpHandler, loginHandler } = useAuth()


  const handleInput = (e) => {
    const input = e.target.value;
    const prop = e.target.name
    if (e.target.type === "checkbox") {
      setUserSignUpDetails({ ...userSignUpDetails, [prop]: e.target.checked })
    }
    else
      setUserSignUpDetails({ ...userSignUpDetails, [prop]: input })
  }


  const handleLoginInput = (e) => {
    const input = e.target.value;
    const prop = e.target.name
    console.log(input)
    if (e.target.type === "checkbox") {
      setLoginDetails({ ...loginDetails, [prop]: e.target.checked })
    }
    else
      setLoginDetails({ ...loginDetails, [prop]: input })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(userSignUpDetails, "login")
    signUpHandler(userSignUpDetails)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
    
  }

  return <>
    {
      isSignedIn ?

        <section class="loginSection">
          <div className="formBox">
            <div className="formValue">
              <form action="">
                <h2>Login</h2>
                <div className="inputBox">
                  <MailOutlineRoundedIcon />
                  <input type="email" name="loginEmail" id="loginEmail" required onClick={handleLoginInput} />
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="inputBox">
                  <LockOutlinedIcon />
                  <input type="password" name="loginPassword" id="loginPassword" required onClick={handleLoginInput} />
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="rememberMe"><input type="checkbox" name="rememberMe" id="rememberMe" /> Rememer Me  </label>
                  <a href="#" rel="noopener noreferrer"> Forgot Password ?</a>
                </div>
                <button type="submit" onClick={handleLoginSubmit}>Log in</button>
                <div className="signUp">
                  <p>Don't have an account? <a href="#" onClick={() => { setSignedIn(false) }}>Sign Up...</a> </p>
                </div>
              </form>
            </div>
          </div>
        </section> :
        <section class="signUpSection">
          <div className="formBox">
            <div className="formValue">
              <form action="">
                <h2>Sign Up</h2>
                <div className="inputBox">
                  <PersonIcon />
                  <input type="text" name="firstName" id="firstName" required onChange={handleInput} />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="inputBox">
                  <PersonIcon />
                  <input type="text" name="lastName" id="lastName" required onChange={handleInput} />
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="inputBox">
                  <MailOutlineRoundedIcon />
                  <input type="email" name="email" id="email" required onChange={handleInput} />
                  <label htmlFor="email">Set Email</label>
                </div>
                <div className="inputBox">
                  <LockOutlinedIcon />
                  <input type="password" name="password" id="password" required onChange={handleInput} />
                  <label htmlFor="password">Set Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="acceptT&C"><input type="checkbox" name="acceptT&C" id="acceptT&C" required onChange={handleInput} />I Accept all Terms & Conditions </label>
                </div>
                <button type="submit" onClick={handleSignUpSubmit}>Sign Up</button>

              </form>
            </div>
          </div>
        </section>
    }
  </>
}