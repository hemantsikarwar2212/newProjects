import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();


export const LocationProvider = ({children})=>{
const [Location, setLocation] = useState();
const [openDropDown , setopenDropDown] = useState(false);

const getLocation = async ()=>{

if(!navigator.geolocation){
  console.log("geoLocation is not supported by your browser");
  return
}

navigator.geolocation.getCurrentPosition(
async (pos)=>{
  const {latitude , longitude} = pos.coords;
  try {
    const res = await axios.get( `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`) 

    const excatLocation = res.data.address;
    setLocation(excatLocation);
    console.log(excatLocation);
    
    setopenDropDown(false);


  } catch (error) {
    console.log(error);}
  })
}

useEffect(()=>{
 getLocation();
},[]);


return (
  <LocationContext.Provider
  value={{
    Location,
    getLocation,
    openDropDown,
    setopenDropDown,
  }}>{children}</LocationContext.Provider>
)

}


export const useLocation = ()=>useContext(LocationContext);