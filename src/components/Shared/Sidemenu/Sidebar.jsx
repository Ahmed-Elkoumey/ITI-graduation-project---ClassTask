import React, { useState } from "react";
import { useEffect } from "react";
import {
  FaTh,
  FaBars,
  FaRegCalendarAlt,
  FaRegChartBar,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import "./side.css";

const Sidemenu = ({ children, title }) => {
  const [data, setData] = useState([]);

<<<<<<< HEAD
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
     
   
      
    ]
    return (
        <div className="container-AT">
           <div style={{width: isOpen ? "163px" : "55px"}} className="sidebar_AT">
               <div className="top_section_AT">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo_AT1">Mr/Ahmed Elzoghaby</h1>
                   <div style={{marginLeft: isOpen ? "4px" : "0px"}} className="bars_AT">
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
=======
  const param = useParams();

  useEffect(() => {
    return () => {
      userDetails();
    };
  }, []);

  const userDetails = () => {
    try {
      fetch(`http://localhost:3000/users/${param.id}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch {
      throw Error;
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: `/dashboard/${param.id}`,
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: `/calender/${param.id}`,
      name: "Calender",
      icon: <FaRegCalendarAlt />,
    },
  ];
  return (
    <div className="container-AT">
      <div style={{ width: isOpen ? "230px" : "55px" }} className="sidebar_AT">
        <div className="top_section_AT">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo_AT"
          >
            Mr/Ahmed Elzoghaby
          </h1>
          <div
            style={{ marginLeft: isOpen ? "-290px" : "0px" }}
            className="bars_AT"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link1_AT"
            activeclassName="active_AT"
          >
            <div className="icon-AT">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text_AT"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
>>>>>>> 04d58691a4ae62325a8d25ac72839fce86df05be
};
export default Sidemenu;
