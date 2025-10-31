import React from "react";
import styles from "../styles/TopicDetails.module.css";
import { Topic } from "../data/forumData";

interface Props {
  topic: Topic;
}

const TopicDetails: React.FC<Props> = ({ topic }) => {
  return (
    <section className={styles.topic}>
      <h2>{topic.title}</h2>
      <h3>{topic.subtitle}</h3>
      <p>{topic.description}</p>

      <div className={styles.meta}>
        <span>👤 {topic.author}</span>
        <span>📅 {topic.date}</span>
        <span>❤️ {topic.likes}</span>
        <span>💬 {topic.responses}</span>
      </div>
    </section>
  );
};

export default TopicDetails;
