import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from 'react-router-dom';

export default function Footer(){
  return <footer>
         <h6>Connect with us</h6>
         <div className="socialMedia">
          <NavLink to="https://www.facebook.com/Tanishq/"><span className="facebook"><FacebookOutlinedIcon/></span></NavLink>
          <NavLink to="https://twitter.com/TheIndianGirl56"> 
          <span className="twitter"><TwitterIcon/></span></NavLink>
          <NavLink to="https://github.com/Anush79">
          <span className="github"><GitHubIcon/></span>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/anushka-jaiswal-46258918a/">
          <span className="linkedin"><LinkedInIcon/></span>
          </NavLink>
         </div>
         <p>Made with ❣️ by Anushka</p>
         
  </footer>
}