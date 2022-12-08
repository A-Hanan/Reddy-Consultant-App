import React from "react";
import ApplicationLayout from "../components/ApplicationLayout";
import styles from "../styles/allExpertsStyles/CompletedAppointments.module.css";

const CompletedAppointments = () => {
  return (
    <ApplicationLayout>
      <div className={styles.completed__appointments__container}>
        CompletedAppointments
      </div>
    </ApplicationLayout>
  );
};

export default CompletedAppointments;
