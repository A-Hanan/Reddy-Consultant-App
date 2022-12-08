import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
// import { Link } from "react-router-dom";
// import VideocamIcon from "@mui/icons-material/Videocam";

const OngoingAppointmentContainer = ({ appointment }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div className="ongoing__appointment__container">
        <div className="user__info">
          <img
            className="user__profile__img"
            src={
              user.userType === "lawyer"
                ? appointment.client.profile
                  ? appointment.client.profile
                  : "https://www.unhcr.org/innovation/wp-content/uploads/2015/04/gellman.png"
                : appointment.lawyer.profile
            }
          />
          <h1>{user.userType === "lawyer" ? "Client" : "Lawyer"}</h1>
          <div className="user__name">
            {/* <span>Name: </span> */}
            <span>
              {user.userType === "lawyer"
                ? appointment.client.name
                : appointment.lawyer.name}
            </span>
          </div>
          <div className="user__name">
            {/* <span>Email: </span> */}
            <span>
              {user.userType === "lawyer"
                ? appointment.client.email
                : appointment.lawyer.email}
            </span>
          </div>
        </div>
        <div className="video__call__settings">
          <div className="appointment__details">
            <h1>Appointment Details</h1>
            <div className="appointment__title">
              <span className="label">Title: </span>
              <span className="text">{appointment.title}</span>
            </div>
            <div className="appointment__title">
              <span className="label">description: </span>
              <span className="text">{appointment.description}</span>
            </div>
          </div>
          <Link
            className="start__video__btn"
            onClick={() => {
              window.location.href = `/video-chat/${appointment._id}`;
            }}
            to="#"
          >
            {/* <CallIcon />
          {user.userRole === "1" ? "Call the Doctor " : " Call the Patient"} */}
            {/* <VideocamIcon /> */}
            Join
          </Link>
          {/* <button
          className="start__video__btn"
          onClick={() => setShowVideoBox(true)}
        >
          <CallIcon />
          {user.userRole === "1" ? "Call the Doctor " : " Call the Patient"}
        </button> */}
          {/* {callAccepted && !callEnded ? (
          <button
            className="start__video__btn"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={leaveCall}
          >
            Hang Up
          </button>
        ) : (
          <button
            className="start__video__btn"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() =>
              callUser(user.userRole === "1" ? doctor?._id : patient?._id)
            }
          >
            Call
          </button> */}
          {/* )} */}
          {/* //<Notifications /> */}
          {/* <Sidebar
          personToCallId={user.userRole === "1" ? doctor?._id : patient?._id}
        >
          <Notifications />
        </Sidebar>
        {showVideoBox && (
          // <div className="video-chat-container">
          // <div>
          //   <CancelIcon onClick={() => setShowVideoBox(false)} />
          <VideoPlayer />
          // </div>
          // </div>
        )} */}
        </div>
      </div>
    </>
  );
};

export default OngoingAppointmentContainer;
