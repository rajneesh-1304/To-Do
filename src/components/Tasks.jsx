import React from 'react';
import '../index.css';

const Tasks = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <>
      <h2 className="showTask">Tasks:</h2>
      <ul className="showList">
        {tasks.map((task) => (
          <li className="list" key={task.id}>
              {task.title}

            <div>
              <button
                className="pending-icon"
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? '✅' : '❌'}
              </button>
              {task.completed && (
                <button
                  className="deleteButton"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
