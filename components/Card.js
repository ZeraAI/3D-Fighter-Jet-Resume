import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ title, company, achievements = [], description, technologies, outcome }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {company && <p className={styles.cardCompany}>{company}</p>}
      {description && <p className={styles.cardDescription}>{description}</p>}
      {technologies && <p className={styles.cardTechnologies}><strong>Technologies:</strong> {technologies}</p>}
      {outcome && <p className={styles.cardOutcome}><strong>Outcome:</strong> {outcome}</p>}
      {achievements.length > 0 && (
        <ul className={styles.cardAchievements}>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
