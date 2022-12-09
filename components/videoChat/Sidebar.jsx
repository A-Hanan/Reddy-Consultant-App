import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../SocketContext";
import Swal from "sweetalert2";
import { Phone, PhoneDisabled } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRouter } from "next/router";

import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { useStateValue } from "../../StateProvider";
import api from "../../utils/api";

const Sidebar = ({
  children,
  receiverId,
  receiverName,
  receiverType,
  appointmentId,
}) => {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    setCallEnded,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const router = useRouter();

  // const userstate = useSelector((state) => state.loginUserReducer);
  // const { currentUser } = userstate;
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

  useEffect(() => {
    const setAndRun = () => {
      console.log(receiverId, receiverName, " at sidebar");
      // setName(receiverName);
      setName(
        user?.userType == "user"
          ? user?.firstName + " " + user?.lastName
          : user?.name
      );
      setIdToCall(receiverId);
    };
    setAndRun();
  }, [receiverId, receiverName]);
  // useEffect(() => {
  //   // console.log("appointment id at sidebar: ", appointmentId);
  // });
  useEffect(() => {
    const setAndRun = async () => {
      if (callEnded === true) {
        leaveCall();

        //setting appointment status attended
        // if (callEnded == true) {
        // alert("call ended");
        Swal.fire(
          "Call ended successfully!",
          "Appointment Attended",
          "successfully"
        );
        const data = {
          appointmentId: appointmentId,
          status: "Attended",
        };
        api
          .put(`/appointment/update`, data)
          .then((res) => {
            console.log("appointment after updation>> ", res.data);

            router.push("/completed-appointments");
          })
          .catch((err) => console.log(err));

        // try {
        //   const data = {
        //     appointmentId: appointmentId,
        //     status: "Attented",
        //   };
        //   const res = axios.put(
        //     `http://localhost:5000/api/appointment/update`,
        //     data
        //   );
        // } catch (error) {
        //   console.log(error.message);
        // }
        // }
        /************************************ */
        // if (user.userRole === "1") {
        //   history.push(`/video-call/rating-and-review/${appointmentId}`);
        // } else {
        //   history.push("/doctor/appointment");
        // }
        //sending notification

        // axios
        //   .post(`http://localhost:5000/api/notifications/`, {
        //     receiverId: receiverId,
        //     text: `You have attended an Appointment successfully.`,
        //     read: false,
        //   })
        //   .then((res) => res)
        //   .catch((err) => console.log);
      }
    };
    setAndRun();
  }, [callEnded]);

  return (
    <div className="video__call__options__container">
      <div className="video__call__options__container__buttons">
        {!callEnded && (
          <>
            {callAccepted ? (
              <button
                onClick={() => leaveCall(receiverId)}
                className="endCall__btn"
              >
                <PhoneDisabled fontSize="large" />
                Hang Up
              </button>
            ) : (
              <button
                onClick={() => callUser(idToCall)}
                className="startCall__btn"
              >
                <PhoneIcon />
                {receiverType === "lawyer"
                  ? "Call the Lawyer"
                  : "Call the Client"}
              </button>
            )}
          </>
        )}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
