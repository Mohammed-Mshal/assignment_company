import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ProjectsList from "./ProjectsList";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: "0",
      status: "todo",
      title: "Design",
      subTitle:
        "We Need 2 Different Concepts for a software page in our program",
      description:
        "I've attached 2 concepts that will give you an idea to reproduce but with a new look and feel. We'd like to keep the colors similar but you can add different colors.",
      circles: [
        { bg: "rgb(245, 139, 1)", letters: "TW" },
        { bg: "blueviolet", letters: "VE" },
      ],
    },
    {
      id: "1",
      status: "todo",
      title: "Development",
      subTitle: "",
      description:
        "I've attached 2 concepts that will give you an idea to reproduce but with a new look and feel. We'd like to keep the colors similar but you can add different colors.",
      circles: [{ bg: "#fdd835", letters: "JI" }],
    },

    {
      id: "2",
      status: "inProgress",
      title: "Development",
      subTitle: "",
      description: "Dynamic links to work with our iOS andAndroid apps.",
      circles: [
        { bg: "green", letters: "sw" },
        { bg: "blue", letters: "JI" },
      ],
    },
    {
      id: "3",
      status: "inProgress",
      title: "Logo redesign",
      subTitle: "",
      description:
        "An existing redesign. The logo includes shading from light red to red, and I want to keep the exact shape, but make it one sold color.",
      circles: [
        { bg: "#2196f3", letters: "AM" },
        { bg: "rgb(245, 139, 1)", letters: "TM" },
      ],
    },
  ]);
  return (
    <div className="projects my-5">
      <div className="header_projects d-flex justify-content-between align-items-center">
        <motion.h2
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.4 }}
        >
          Projects
        </motion.h2>
        <motion.span
          initial={{
            x: 150,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="pe-2"
        >
          This Week
          <AiOutlineDown className="fs-6 fw-bold" />
        </motion.span>
      </div>
      <div className="body_projects row">
        <DndProvider backend={HTML5Backend}>
          <ProjectsList projects={projects} setProjects={setProjects} />
        </DndProvider>
      </div>
    </div>
  );
}

export default Projects;
