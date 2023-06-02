import { useLocation, Navigate } from "react-router-dom";

export default function RequiresAuth({children, token}){
  const location = useLocation();
  
  return<>
  {
    token? children : <Navigate to='/login' state={{from : location}} />
  }
  </>
}
