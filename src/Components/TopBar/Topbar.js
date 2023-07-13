import React from "react";
import { HiSearch } from "react-icons/hi";
import "./topbar.css";
import { AiOutlineDown, AiOutlineQuestionCircle } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { motion } from "framer-motion";
function Topbar() {
  return (
    <div className="topbar d-flex align-items-center justify-content-between">
      <motion.div
        initial={{
          y: -150,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="box_search position-relative fs-4"
      >
        <HiSearch className="position-absolute start-0 top-50 translate-middle-y" />
        <input
          type="search"
          placeholder="Search"
          className="border-0 bg-transparent w-100 ps-5 p-2"
        />
      </motion.div>
      <div className="box_option fs-4 d-flex align-items-center">
        <motion.p
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          className=" mx-2 m-0"
        >
          <AiOutlineQuestionCircle />
        </motion.p>
        <motion.p
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6 }}
          className="message mx-2 m-0"
        >
          <GrNotification />
        </motion.p>
        <motion.p
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className="fs-5 mx-3 fw-bold m-0"
        >
          Irakli Lolashvili
          <AiOutlineDown className="fs-6 fw-bold mx-1" />
        </motion.p>
        <motion.img
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.8 }}
          src="https://placehold.co/40x40"
          className="rounded-pill"
          alt="personal_img"
        />
      </div>
    </div>
  );
}

export default Topbar;
