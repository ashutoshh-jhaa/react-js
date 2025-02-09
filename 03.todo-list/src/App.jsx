import { useState } from "react";

function App() {
  const initialTask = JSON.parse(localStorage.getItem("task")) || [];
  const [tasks, setTasks] = useState(initialTask);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() !== "") {
      const updatedTasks = [...tasks, { text: task, completed: false }];
      setTasks(updatedTasks);
      localStorage.setItem("task", JSON.stringify(updatedTasks));
      setTask("");
    }
  }

  function deleteTask(idx) {
    const updatedTasks = tasks.filter((_, i) => i !== idx);
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  }

  function completeTask(idx) {
    const updatedTasks = tasks.map((t, i) =>
      i === idx ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Task Manager</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((t, idx) => (
          <li
            key={idx}
            className={`list-group-item d-flex justify-content-between align-items-center ${t.completed ? "text-decoration-line-through" : ""
              }`}
          >
            {t.text}
            <div>
              <button className="btn btn-success btn-sm me-2" onClick={() => completeTask(idx)}>
                ✓
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(idx)}>
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;