import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ title, company, achievements }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardCompany}>{company}</p>
      <ul className={styles.cardAchievements}>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
