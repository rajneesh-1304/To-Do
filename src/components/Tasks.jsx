import React from 'react';
import '../index.css';

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
      <h2 className="showTask">Tasks:</h2>
      <ul className="showList">
        {tasks.map((task, idx) => (
          <li className="list" key={idx}>
            {task}
            <div>
                <button
              className="deleteButton"
              onClick={() => deleteTask(idx)}
            >
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
