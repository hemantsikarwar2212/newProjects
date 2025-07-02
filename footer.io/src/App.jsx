
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing,Layout , Home,Pricing} from "./routes/route";

import './App.css'

function App() {

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout/>}> 
    <Route path="/" element={<Landing/>}></Route>
    <Route path="Home" element={<Home/>}> </Route>
    <Route path="Pricing" element={<Pricing/>}></Route>
   </Route>
  </Routes>
  </BrowserRouter>
  )
}


export default App
