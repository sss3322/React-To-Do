import React, { useState, useContext } from 'react';
import { Newcontext } from './App';
import './ToDoUI.css';

function ToDoTask() {
  const [data, setData] = useContext(Newcontext);
  const [input, setInput] = useState({
    task: '',
  });
  const [editedTask, setEditedTask] = useState({ index: null, content: '' });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCreateTask = () => {
    const newdata = [...data, input];
    setData(newdata);
    setInput({ task: '' }); 
  };

  const handleEditTask = (index, task) => {
    setEditedTask({ index, content: task });
  };

  const handleSaveTask = () => {
    const updatedTasks = data.map((task, index) =>
      index === editedTask.index ? { ...task, task: editedTask.content } : task
    );
    setData(updatedTasks);
    setEditedTask({ index: null, content: '' });
  };

  const handleDeleteTask = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className="create-container">
      <h2>Todoo List</h2>
      <div className="input-container">
        <input
          type="text"
          className="input-box-todo"
          placeholder="Enter Task"
          value={input.task}
          onChange={handleInputChange}
          name="task"
        />
        <button className="create-btn" onClick={handleCreateTask}>
          Create
        </button>
      </div>

      {data.map((task, index) => (
        <div key={index} className="task-container">
          {editedTask.index === index ? (
            <>
              <input
                type="text"
                value={editedTask.content}
                onChange={(e) => setEditedTask({ ...editedTask, content: e.target.value })}
              />
              <button className="save-btn" onClick={handleSaveTask}>
                Save
              </button>
            </>
          ) : (
            <>
              <span>{task.task}</span>
              <div className="task-buttons">
                <button className="edit-btn" onClick={() => handleEditTask(index, task.task)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDoTask;
