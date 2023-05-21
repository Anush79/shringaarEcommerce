/*
we encourage to have a dedicated route called `/mock-api`
 on your frontend app where you can import Mockman and 
 test them 
*/



import Mockman from "mockman-js";
function MockAPI() {
  return (
    <div style={{marginTop: "90px",}} className="MockAPI">
      <Mockman />
    </div>
  );
}

export default MockAPI;