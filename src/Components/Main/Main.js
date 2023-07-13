import React from "react";
import Topbar from "../TopBar/Topbar";
import { Route, Routes } from "react-router-dom";
import Overview from "../Overview/Overview";
import Stats from "../Stats/Stats";
import Projects from "../Projects/Projects";
import Chat from "../Chat/Chat";
import Calendar from "../Calendar/Calendar";
import Setting from "../Setting/Setting";
import "./main.css";
function Main() {
  return (
    <div className="main flex-fill p-5">
      <Topbar />
      <div className="main_content">
        <Routes>
          <Route index element={<Projects />} />
          <Route path="overview" element={<Overview />} />
          <Route path="stats" element={<Stats />} />
          <Route path="projects" element={<Projects />} />
          <Route path="chat" element={<Chat />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
