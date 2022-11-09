import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbarst from "../student-nav/index";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sidemenust from "../Sidemenustd/Sidebar";

// bars

export default function Calenderstd() {
  const [show, setShow] = useState(false);

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    locales,
    getDay,
  });

  const events = [];

  const [allEvents, setAllEvents] = useState(events);



  return (
    <>
      <div className="">
        <Navbarst/>
      <Sidemenust>
         

            <div className="row">
              <div className="col-md-5 m-auto">
            <h1 className="text-center mt-4">Calendar1</h1>
  

              </div>

              <div className="col-md-11 m-auto">
                <Calendar
                  localizer={localizer}
                  events={allEvents}
                  startAccessor="start"
                  endAccessor="end"
                  className="w-100"
                  style={{ height: 450 }}
                />
              </div>
            </div>

       
         
            </Sidemenust>
      </div>
    </>
  );
}
