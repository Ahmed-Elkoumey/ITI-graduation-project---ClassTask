import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calender() {
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

  const events = [
  
  ];

  const [allEvents, setAllEvents] = useState(events);

  const handelAddEvents = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          sideBar

          <label>Add Your Task Title </label>
            <input
              type="text"
              placeholder="Add Title"
              className="form-control ms-5"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />


          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />

          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button className="btn btn-primary" onClick={handelAddEvents}>
            Submit
          </button>
        </div>
        <div className="col-md-9">
          <h1 className="text-center m-0">Calendar</h1>
          <h2 className="text-center">Add New Event</h2>
          <div>
           
          </div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            className="w-100"
            style={{ height: 450, margin: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}
