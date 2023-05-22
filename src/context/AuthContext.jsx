import { createContext, useContext, useState } from "react"
import { toast } from 'react-toastify';
import { loginService } from '../services/authService/loginService'

import { signUpService } from '../services/authService/signUpSevice'
export const AuthContext = createContext()


const notify = (message) => toast(message);
export function AuthProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem(
    "loginDetails"
  ));

  const [token, setToken] = useState(localStorageToken?.token)
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user)

  const loginHandler = async ({ loginEmail:email, loginPassword: password}) => {
 
    try {
    
      const response = await loginService(email, password);
    //  console.log(response)
     const {status,data:{encodedToken, foundUser} } = response
     console.log(status, encodedToken, foundUser)
     if(status===200){
     setToken(encodedToken)
     setCurrentUser(foundUser)
      }
      notify("login successful")
    } catch (error) {
      console.log(error)
    }
  }


  const signUpHandler = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await signUpService(email, password, firstName, lastName)
      const { status, data: { createdUser, encodedToken } } = response
      if (status === 201) {
        localStorage.setItem("loginDetails", JSON.stringify({
          user: createdUser,
          token: encodedToken
        }))
        setToken(encodedToken)
        setCurrentUser(createdUser)
      }
      notify("Sign Up Successful")

    } catch (error) {
      console.log(error)
      toast.error("Sign up unsuccessful")
    }
  }
  console.log(token, currentUser)
  return <AuthContext.Provider value={{ signUpHandler, loginHandler }}>
    {children}
  </AuthContext.Provider>
}
export const useAuth = () => {
  return useContext(AuthContext)
}