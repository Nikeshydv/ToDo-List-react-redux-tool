import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";

import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Nopage from "./Nopage";
import About from "../About";
import Compnayservice from "./Pages/Companyservice";
import Productservice from "./Pages/Productservice";
import Sellsservice from "./Pages/Sellsservice";





const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
     <Route path="about" element={<About/>}/>
     
      <Route path="service" element={<Service/>}>
      <Route path="Compnayservice" element={<Compnayservice/>}/>
      <Route path="productservice" element={<Productservice/>}/>
      <Route path="sellservice" element={<Sellsservice/>}/>
      
      </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;