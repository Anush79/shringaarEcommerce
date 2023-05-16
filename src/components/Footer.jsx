import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer(){
  return <footer>
         <h6>Connect with us</h6>
         <div className="socialMedia">
          <span className="facebook"><FacebookOutlinedIcon/></span>
          <span className="twitter"><TwitterIcon/></span>
          <span className="github"><GitHubIcon/></span>
          <span className="linkedin"><LinkedInIcon/></span>
         </div>
         <p>Made with ❣️ by Anushka</p>
         
  </footer>
}