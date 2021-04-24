import React, { useState } from "react";
import "./styles.css";

import NavBar from "./components/navBar/NavBar";
import TaskList from "./components/taskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existngTask) => {
      return [...existngTask, newTask];
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
