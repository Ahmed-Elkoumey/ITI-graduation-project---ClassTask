import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRegCalendarAlt,
    FaRegChartBar,
  
    FaChalkboardTeacher
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './side.css'


const Sidemenu = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/calender",
            name:"Calender",
            icon:<FaRegCalendarAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
   
        {
            path:"/Allclasses",
            name:"AllClasses",
            icon:<FaChalkboardTeacher/>,
         
           
        }
    ]
    return (
        <div className="container-AT">
           <div style={{width: isOpen ? "230px" : "50px"}} className="sidebar_AT">
               <div className="top_section_AT">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo_AT">Mr/Ahmed Elzoghaby</h1>
                   <div style={{marginLeft: isOpen ? "-290px" : "0px"}} className="bars_AT">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link1_AT" activeclassName="active_AT">
                           <div className="icon-AT">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text_AT">{item.name}</div>
                         
                       </NavLink>
                       
                   ))
               }
           </div>
           
           <main>{children}
           
           
           </main>
    
           
        </div> 
    );
};
export default Sidemenu