import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbart from "../Shared/Navbart";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sidemenu from "../Shared/Sidemenu/Sidebar";

// bars

export default function Calender() {
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

  const handelAddEvents = () => {
    setAllEvents([...allEvents, newEvent]);
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="">
        <Navbart/>
      <Sidemenu>
         

            <div className="row">
              <div className="col-md-5 m-auto">
            <h1 className="text-center mt-4">Calendar</h1>
  
<Button variant="primary" className="w-100 mb-3" onClick={handleShow}>
                Add New Event
              </Button>
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

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <label htmlFor="title">Your Task Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Add Title"
                  className="form-control"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />

                <label htmlFor="start">Your Start Date</label>
                <DatePicker
                  placeholderText="Start Date"
                  id="start"
                  className="form-control"
                  style={{ marginRight: "10px" }}
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({ ...newEvent, start })}
                />

                <label htmlFor="end">Your End Date</label>
                <DatePicker
                  placeholderText="End Date"
                  id="end"
                  className="form-control"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <button className="btn btn-primary" onClick={handelAddEvents}>
                  Submit
                </button>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Understood
                </Button>
              </Modal.Footer>
            </Modal>
         
            </Sidemenu>
      </div>
    </>
  );
}
