import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService } from "../services/authService/loginService";

import { signUpService } from "../services/authService/signUpSevice";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async ({
    loginEmail: email,
    loginPassword: password,
  }) => {
    try {
      const response = await loginService(email, password);

      const {
        status,
        data: { encodedToken, foundUser },
      } = response;

      if (status === 200) {
        setToken(encodedToken);
        setCurrentUser(foundUser);
        if (location?.state?.from?.pathname)
          navigate(location?.state?.from?.pathname);
        else navigate("/", { replace: true });

        localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            user: foundUser,
            token: encodedToken,
          })
        );
      }
      toast.success(`Welcome back, ${foundUser.firstName}!`, {
        icon: "😍👋",
      });
    } catch (error) {
      toast.error("Login unsuccessful, Email or Password is wrong", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const signUpHandler = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await signUpService(
        email,
        password,
        firstName,
        lastName
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            user: createdUser,
            token: encodedToken,
          })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
        toast.success("Sign Up Successful", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      if (location?.state?.from?.pathname)
        navigate(location?.state?.from?.pathname);
      else navigate("/browse", { replace: true });
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        toast.error("User Already exists", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else
        toast.error("Sign up unsuccessful", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
  };

  const logOutHandler = async () => {
    setToken(() => null);
    setCurrentUser(() => null);
    console.log("logout success");
    toast.success("logged out successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    localStorage.removeItem("loginDetails");
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{ signUpHandler, loginHandler, logOutHandler, token,setCurrentUser, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
