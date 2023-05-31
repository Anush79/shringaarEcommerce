export default function UpdateAddress({clickF}) {
  return (
    <>
    <div className="addFormBox">
     
         <form className="addressForm">
         <div className="closeAdd" onClick={()=>clickF(false)}>X</div>
       <div className="fullNameAdd">
        <input type="text" name="fullName" id="fullName" required />
          <label htmlFor="fullName"> Full Name
        </label>
       </div>
       <div className="buildingAdd">
 <input type="text" name="building" id="building" />
       
        <label htmlFor="building">Building </label>
       </div>
          <div className="streetAdd">
           
          <input type="text" name="streetName" id="streetName" required/>
          <label htmlFor="streetName">Street Name</label>
          </div>
          <div className="cityAdd">
          <input type="text" name="cityName" id="cityName" required />
          <label htmlFor="cityName">City Name</label>
          </div>
         <div className="stateAdd">
   <input type="text" name="state" id="state" required/>
       <label htmlFor="state">State </label>
         </div>
         <div className="pinCodeAdd">
   <input type="number" size={6} min={100001} max={999999} name="pincode" id="pincode" required/>
       <label htmlFor="pincode">Pincode </label>
         </div>
       <div className="mobileAdd">

          <input type="text" name="mobile" id="mobile" required/>
         <label htmlFor="mobile">Mobile </label>
       </div>
        
       
       <div className="addTypeAdd">
        Address Type
           <input type="radio" name="addType" id="addType" />
       <label htmlFor="addType">Work </label> 
       <input type="radio" name="addType" id="addType" />
       <label htmlFor="addType">Home </label>
       </div>
        
       
      </form>
      
    </div>
    </>
  );
}
