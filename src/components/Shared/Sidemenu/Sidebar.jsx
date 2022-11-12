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

export default function Sidemenu({ children, title }) {
  const [data, setData] = useState([]);

  const param = useParams();

  useEffect(() => {
    return () => {
      userDetails();
    };
  }, []);

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

  const userDetails = () => {
    try {
      fetch(`http://localhost:3000/users/${param.id}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch {
      throw Error;
    }
  };

  return (
    <div className="container-AT">
      <div
        style={{ width: isOpen ? "163px" : "55px" }}
        className="sidebar_AT h-100"
      >
        <div className="top_section_AT ">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo_AT1"
          >
            Mr/ {title}
          </h1>
          <div
            style={{ marginLeft: isOpen ? "4px" : "0px" }}
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
}
