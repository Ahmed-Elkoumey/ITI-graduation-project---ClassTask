import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbart from "./components/Shared/Navbart";
// import Sidemenu from "./components/Sidemenu";
 import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidemenu from  './components/Shared/Sidemenu/Sidebar';
import AllClasses from './pages/AllClasses/index.jsx'
import Home from "./pages/Home";
function App() {
  return (
  <div className="App">
   
    <Navbart/>
   
    <BrowserRouter >
       <Sidemenu> 
      <Routes>
      <Route path="/"  element={<Home/>} />
      
      <Route path="/Allclasses"  element={<AllClasses/>} />
      </Routes>
 </Sidemenu> 
    
 </BrowserRouter>

 

  </div> )
}

export default App;
