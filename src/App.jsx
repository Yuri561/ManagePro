import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      alert("Please fill out the task");
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleEdit = (index) => {
    const editedTask = prompt("Edit your task", tasks[index]);
    if (editedTask !== null) {
      const updatedTasks = tasks.map((task, idx) =>
        idx === index ? editedTask : task
      );
      setTasks(updatedTasks);
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className='wrapper container mt-5'>

      <header>
        <h1>Yuri's Personal Task Manager</h1>
        <form id="new-task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="new-task-input"
            placeholder="What do you have planned"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input type="submit" id="new-task-submit" value="Add Task" />
        </form>
      </header>
      <main>
        <section className="tasks">
          <h2>Tasks</h2>
          <div id="tasks">
            {tasks.map((task, index) => (
              <div className="task" key={index}>
                <div className="content">
                  <input
                    type="text"
                    className="text"
                    value={task}
                    readOnly
                  />
                </div>
                <div className="actions">
                  <button className="edit" onClick={() => handleEdit(index)}>
                    EDIT
                  </button>
                  <button className="delete" onClick={() => handleDelete(index)}>
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
    </>
  );
}

export default App;
