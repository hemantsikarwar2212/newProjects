import './App.css'
import {BrowserRouter , Routes , Route ,Link} from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import Services from '../pages/services'
import BookTruck from '../pages/bookatruck'
import Navbar from '../components/NavBar'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <nav style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{ margin: "0 10px" }}>
          
        </Link>
        <Link to="/services" style={{ margin: "0 10px" }}>
         
        </Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>
          
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/bookatruck" element={<BookTruck />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
