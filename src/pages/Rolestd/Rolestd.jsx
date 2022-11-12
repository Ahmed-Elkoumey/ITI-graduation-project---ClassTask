import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student from '../../pages/student/index'
import Studenttasks from '../../components/student/Studenttasks'
import Sidemenu from '../../components/student/Sidemenustd/Sidebar'
import AllClasses from "./pages/Class";


function Rolestd() {
  return (<div>
    
    <BrowserRouter >
       <Sidemenu> 
     
      
      <Routes>
      <Route path="/student"  element={<Student/>} />
     
       <Route path="/tasks"  element={<Studenttasks/>} /> 
     
      </Routes>
 </Sidemenu> 
 </BrowserRouter>

    
 
 </div>
  )
}

export default Rolestd