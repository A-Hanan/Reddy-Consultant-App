import ApplicationLayout from "../components/ApplicationLayout";
import styles from "../styles/allExpertsStyles/UpcomingAppointment.module.css";
import React, { useState, useEffect } from "react";

import { getUpcomingAppointments } from "../Actions/appointmentActions";
import { cancelAppointment } from "../Actions/appointmentActions2";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ClearIcon from "@mui/icons-material/Clear";
// import IconButton from "@mui/material/IconButton";
// import { addCreateConvMembers } from "../../Actions/messengerActions";
// import { useNavigate, Link } from "react-router-dom";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import api from "../utils/api";
import { useRouter } from "next/router";
import { useStateValue } from "../StateProvider";

const UpcomingAppointments = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    let User = localStorage?.getItem("consult_pro_user")
      ? JSON.parse(localStorage?.getItem("consult_pro_user"))
      : null;
    dispatch({
      type: "SET_USER",
      user: User ? User : null,
    });
  }, []);

  // const userstate = useSelector((state) => state.loginUserReducer);
  // const { user } = userstate;

  useEffect(() => {
    async function getAndPerform() {
      let response = await getUpcomingAppointments(user);
      if (response?.length > 0) {
        setAppointments(response);
        response &&
          response?.map((d) => {
            if (
              new Date(d?.appointmentDate).setHours(0, 0, 0, 0) <
              new Date().setHours(0, 0, 0, 0)
            ) {
              cancelAppointment(d?._id, navigate, user);
            }
          });
        console.log("upcomingAppointments>>", response);
      } else {
        console.log("error while fetching appoitments");
      }
    }
    getAndPerform();
  }, []);
  function dateDifference(date2, date1) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    );
    const utc2 = Date.UTC(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    );

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  const setNow = (e, appointmentId) => {
    const id = appointmentId;
    api
      .put(`/appointment/setNow/${id}`)
      .then((res) => {
        console.log("response>>>>>>>>>", res.data);
        window.location.href = "/dashboard/ongoing__appointments";
      })
      .catch((err) => console.log(err));
  };
  return (
    <ApplicationLayout>
      <div className={styles.upcoming__appointments__container}>
        <div className={styles.upcoming__appointments}>
          {appointments.length > 0 ? (
            <>
              <h1 style={{ textAlign: "center" }} className={styles.heading}>
                Upcoming Appointments
              </h1>
              {appointments.map((appointment) => (
                <div className={styles.upcoming__appointment}>
                  <p className={styles.remaining__time}>
                    {dateDifference(
                      new Date(appointment?.appointmentDate),
                      new Date()
                    )}{" "}
                    Days Left
                  </p>

                  <div className={styles.row__one}>
                    <div className={styles.expert__info}>
                      <img
                        src={
                          appointment.expert.profile
                            ? appointment.expert.profile
                            : "https://www.unhcr.org/innovation/wp-content/uploads/2015/04/gellman.png"
                        }
                      />
                      <h3>
                        {user?.userType == "user"
                          ? appointment.expert?.name
                          : appointment.user?.firstName +
                            " " +
                            appointment.user?.lastName}
                      </h3>
                      {/* <h5>(Expert)</h5> */}
                      <h5>
                        {user?.userType == "user" ? "(Expert)" : "(User)"}
                      </h5>
                    </div>
                    <div className={styles.appointment__info}>
                      <span className={styles.label}>Appointment Date </span>
                      <h6>
                        {new Date(appointment.appointmentDate).toDateString()}
                      </h6>
                      <span className={styles.label}>Appointment Time </span>
                      <h6>{appointment.appointmentTime}</h6>
                    </div>
                  </div>

                  <div className={styles.row__two}>
                    <div>
                      <span className={styles.label}>Appointment Title: </span>
                      <h6>{appointment.title}</h6>
                    </div>
                    <div>
                      {" "}
                      <h3 className={styles.label}>
                        {appointment.description}
                      </h3>
                      <h6></h6>
                    </div>
                  </div>
                  <div className={styles.row__three}>
                    {/* <button
                      className={styles.cancel__btn}
                      onClick={() => {
                        cancelAppointment(appointment._id, user);
                        let array = appointments;
                        array = array?.filter(
                          (a) => a?._id !== appointment?._id
                        );
                        setAppointments(array);
                      }}
                    >
                      Cancel&nbsp;
                     
                    </button> */}

                    {/* <button
                      className={styles.chat__btn}
                      // onClick={(e) => {
                      //   // navigate(`/messages/${expert?._id}`);
                      //   navigate(`/dashboard/chat`);
                      //   dispatch(
                      //     addCreateConvMembers(
                      //       appointment?.client?.name,
                      //       appointment?.clientId
                      //     )
                      //   );
                      // }}
                    >
                      chat&nbsp;
                   
                    </button> */}
                  </div>
                  {/* {user?.userType === "expert" && (
                    <button
                      className={styles.setNow__btn}
                      onClick={(e) => {
                        setNow(e, appointment._id);
                      }}
                    >
                      Set Now
                    </button>
                  )} */}
                </div>
              ))}
            </>
          ) : (
            <h1 className={styles.appointments__not__found__info}>
              {" "}
              No Upcoming Appointments
            </h1>
          )}
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default UpcomingAppointments;
