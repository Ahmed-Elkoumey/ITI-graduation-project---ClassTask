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
            path:"/",
            name:"All students",
            icon:<FaTh/>
        },
        {
            path:"/calendar",
            name:"Calendar",
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
    
           {/* homepage */}
          
        {/* <div className=' d-flex align-baseline  '>
       <div>
        {/* <button className='mb-4    addclass'>Add new Class + </button> */}
       {/* <button class="button-56" role="button">Add new Class +</button>
       </div>
     
        <div className="mb-2 d-flex   home">
        <div className='total me-5'>
         <p> Total students are<br/><p className='value'>50 Students</p></p>

        </div>
        <div className='total '>
            <p> Total classes are<br/> <p className='value'>5 classes</p></p>
            </div>
        </div>
        </div> */}
        </div> 
    );
};
export default Sidemenu