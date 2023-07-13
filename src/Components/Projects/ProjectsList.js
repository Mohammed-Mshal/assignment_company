import React, { useEffect, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import "./project.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useDrag, useDrop } from "react-dnd";
import { motion } from "framer-motion";

function ProjectsList({ projects, setProjects }) {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    setTodo(projects.filter((task) => task.status === "todo"));
    setInProgress(projects.filter((task) => task.status === "inProgress"));
    setCompleted(projects.filter((task) => task.status === "completed"));
  }, [projects]);
  const statuses = ["todo", "inProgress", "completed"];
  return (
    <div className="project_list d-flex justify-content-between">
      {statuses.map((status, index) => {
        return (
          <Section
            key={index}
            status={status}
            projects={projects}
            setProjects={setProjects}
            todo={todo}
            inProgress={inProgress}
            completed={completed}
          />
        );
      })}
    </div>
  );
}

export default ProjectsList;

const Section = ({
  status,
  projects,
  setProjects,
  todo,
  inProgress,
  completed,
}) => {
  let text = "Todo";
  let projectToMaps = projects;
  if (status === "inProgress") {
    text = "In Progress";
    projectToMaps = inProgress;
  }
  if (status === "todo") {
    text = "To Do";
    projectToMaps = todo;
  }
  if (status === "completed") {
    text = "Completed";
    projectToMaps = completed;
  }
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "project",
    drop: (item) => {
      addItemToSection(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = (id) => {
    setProjects((prev) => {
      const mProject = prev.map((p) => {
        if (p.id === id) {
          return { ...p, status: status };
        }
        return p;
      });
      return mProject;
    });
  };
  return (
    <div
      ref={drop}
      className={`section me-4 rounded-3 p-4 ${isOver ? "bg-light" : ""}`}
    >
      <Header text={text} count={projectToMaps.length} />
      {projectToMaps.length > 0 &&
        projectToMaps.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              setProjects={setProjects}
              projects={projects}
            />
          );
        })}
    </div>
  );
};
const Header = ({ text, count }) => {
  return (
    <div className={`header rounded-3`}>
      <div className="d-flex align-items-center justify-content-between">
        <motion.h4
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
        </motion.h4>
        <motion.h4
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="count"
        >
          {count}
        </motion.h4>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="btn_add rounded-2 d-flex justify-content-center py-3 mb-3"
      >
        <AiOutlinePlus />
      </motion.div>
    </div>
  );
};

const Circle = ({ bg, letters }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white rounded-pill m-0 d-flex align-items-center justify-content-center"
      style={{
        background: bg,
        fontSize: "12px",
        height: "24px",
        width: "24px",
        marginLeft: "-20px",
      }}
    >
      {letters}
    </motion.div>
  );
};

const Project = ({ project }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "project",
    item: { id: project.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`task bg-white p-4 rounded-3 my-3
    ${isDragging ? "opacity-25" : "opacity-100"}`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="d-flex align-items-baseline justify-content-between"
      >
        <h4 className="title m-0">{project.title}</h4>
        <GrAttachment className="fs-4 pt-1" />
      </motion.div>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="subTitle text-start mt-3 mb-4 text-muted"
      >
        {project.subTitle}
      </motion.p>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="description text-start mt-3 mb-4 text-muted"
      >
        {project.description}
      </motion.p>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="d-flex align-content-start justify-content-start"
      >
        {project.circles.length > 0 &&
          project.circles.map((circle, index) => {
            return (
              <Circle key={index} bg={circle.bg} letters={circle.letters} />
            );
          })}
      </motion.div>
    </div>
  );
};
