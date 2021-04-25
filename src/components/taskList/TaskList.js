import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

import TaskItem from "../taskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate
}) {
  const addTask = () => {
    //console.log("chamada dentro do task");
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <button onClick={addTask}>Adicionar Tarefa</button>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}

TaskList.prototype = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
