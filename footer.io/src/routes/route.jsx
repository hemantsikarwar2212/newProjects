import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";



export function Layout(){
    return <div style={{height:"100vh"}}>
    <nav>
      <div style={{display:"flex" , justifyContent:"center",padding:"20px" , margin:"20px"}}>
      <Link to="/">this is landing</Link> |  
      <Link to="/Home"><div>this is hom</div></Link> |
      <Link to="/Pricing"><div>Pricing</div></Link> |
      </div>
    </nav>

      <div style={{height:"90vh"}}>
      <Outlet/>
      </div >
      <div>footer | policies | about us</div>
    </div>
}
export const Landing = ()=>{
  return <div>
    this  is landing
  </div>

}
export const Home = ()=>{
  return <div>
    this  is HOME
  </div>

}
export const Pricing = ()=>{
  return <div>
    this  is pricng
  </div>

}

