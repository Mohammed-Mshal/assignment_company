import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { ImStatsBars2 } from "react-icons/im";
import { CgLogOut } from "react-icons/cg";
import {
  AiFillCalendar,
  AiFillFolderOpen,
  AiFillSetting,
} from "react-icons/ai";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { motion } from "framer-motion";

function Sidebar() {
  const [active, setActive] = useState("projects");
  return (
    <motion.div className="sidebar d-flex flex-column text-start ps-5 py-5">
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="Logo mb-4"
      >
        <h1>.studio</h1>
      </motion.div>
      <div className="list_links-5 d-flex flex-column flex-fill justify-content-between">
        <div className="Links  d-flex flex-column">
          <Link
            to={"/overview"}
            onClick={(e) => setActive("overview")}
            className={`text-black text-decoration-none fs-5 d-flex align-items-center fw-bold `}
          >
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
              className={`py-2 my-2 ${
                active === "overview" && "active"
              } flex-fill`}
            >
              <HiHome className="me-3" />
              Overview
            </motion.p>
          </Link>
          <Link
            to={"/stats"}
            onClick={(e) => setActive("stats")}
            className={`text-black text-decoration-none fs-5 d-flex align-items-center fw-bold `}
          >
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className={`py-2 my-2 ${
                active === "stats" && "active"
              } flex-fill`}
            >
              <ImStatsBars2 className="me-3" />
              Stats
            </motion.p>
          </Link>
          <Link
            to={"/projects"}
            onClick={(e) => setActive("projects")}
            className={`text-black text-decoration-none fs-5 d-flex align-items-center fw-bold`}
          >
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9 }}
              className={`py-2 my-2 ${
                active === "projects" && "active"
              } flex-fill`}
            >
              <AiFillFolderOpen className="me-3" />
              Projects
            </motion.p>
          </Link>
          <Link
            to={"/chat"}
            onClick={(e) => setActive("chat")}
            className={`text-black text-decoration-none fs-5 d-flex align-items-center fw-bold`}
          >
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className={`py-2 my-2 ${
                active === "chat" && "active"
              } flex-fill d-flex align-items-center`}
            >
              <BsFillChatLeftDotsFill className="me-3" />
              Chat
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
                className=" ms-auto me-5 px-2 rounded-3 text-white"
                style={{
                  backgroundColor: "#f58b01",
                }}
              >
                2
              </motion.div>
            </motion.div>
          </Link>
          <Link
            to={"/calendar"}
            onClick={(e) => setActive("calendar")}
            className={`text-black text-decoration-none fs-5 d-flex align-items-center fw-bold`}
          >
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.1 }}
              className={`py-2 my-2 ${
                active === "calendar" && "active"
              } flex-fill`}
            >
              <AiFillCalendar className="me-3" />
              Calendar
            </motion.p>
          </Link>
        </div>
        <div className="Links d-flex flex-column mt-auto">
          <Link
            onClick={(e) => setActive("setting")}
            className={`text-black text-decoration-none fs-5 d-flex align-items-center fw-bold`}
          >
            <motion.p
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }}
              className={` ${
                active === "setting" && "active"
              } py-2 px-0 my-2 flex-fill`}
            >
              <AiFillSetting className="me-3" />
              Setting
            </motion.p>
          </Link>
          <motion.button
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.3 }}
            className="text-black btn text-decoration-none fs-5 d-flex align-items-center fw-bold py-2 px-0 my-2"
          >
            <CgLogOut className="me-3" />
            Logout
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
