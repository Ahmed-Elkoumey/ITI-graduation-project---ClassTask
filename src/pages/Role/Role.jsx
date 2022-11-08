import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from '../../pages/Home/index'
import Navbart from '../../components/Shared/Navbart'
import Sidemenu from '../../components/Shared/Sidemenu/Sidebar'
import AllClasses from "./pages/Class";


function Role() {
  return (<div>
    
      <BrowserRouter >
       <Sidemenu> 
     
       <Navbart/>
      <Routes>
      <Route path="/dashboard"  element={<DashBoard/>} />
      
       <Route path="/Allclasses"  element={<AllClasses/>} /> 
     
      </Routes>
 </Sidemenu> 
    
 </BrowserRouter>
 </div>
  )
}

export default Role