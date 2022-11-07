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
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Mr/Ahmed Elzoghaby</h1>
                   <div style={{marginLeft: isOpen ? "-300px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                            {/* <Submenu item={item.name} key={index.name} />; */}
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