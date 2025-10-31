
"use client";
import React from "react";
import Header from "./components/Header";
import TopicDetails from "./components/TopicDetails";
import ResponseList from "./components/ResponseList";
import ResponseForm from "./components/ResponseForm";
import Sidebar from "./components/Sidebar";
import {
  mainTopic,
  topicResponses,
  sidebarData,
  menuItems,
  currentUser,
} from "./data/forumData";
import styles from "./styles/globals.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <Header menu={menuItems} />

      <main className={styles.main}>
        <div className={styles.content}>
          <TopicDetails topic={mainTopic} />
          <ResponseList responses={topicResponses} />
          <ResponseForm currentUser={currentUser} />
        </div>

        <Sidebar
          latest={sidebarData.latest}
          mostReplied={sidebarData.mostReplied}
          mostLiked={sidebarData.mostLiked}
        />
      </main>
    </div>
  );
}
