import './login.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

export default function Login() {
  const [isSignedIn, setSignedIn] = useState(true)
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
                  <input type="email" name="email" id="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="inputBox">
                  <LockOutlinedIcon />
                  <input type="password" name="password" id="password" required />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="rememberMe"><input type="checkbox" name="rememberMe" id="rememberMe" /> Rememer Me  </label>
                  <a href="#" rel="noopener noreferrer"> Forgot Password ?</a>
                </div>
                <button>Log in</button>
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
                  <input type="text" name="fullName" id="fullName" required />
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <div className="inputBox">
                  <MailOutlineRoundedIcon />
                  <input type="email" name="email" id="email" required />
                  <label htmlFor="email">Set Email</label>
                </div>
                <div className="inputBox">
                  <LockOutlinedIcon />
                  <input type="password" name="password" id="password" required />
                  <label htmlFor="password">Set Password</label>
                </div>
                <div className="forget">
                  <label htmlFor="acceptT&C"><input type="checkbox" name="acceptT&C" id="acceptT&C" required />I Accept all Terms & Conditions </label>
                </div>
                <button>Sign Up</button>

              </form>
            </div>
          </div>
        </section>
    }
  </>
}