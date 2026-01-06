import React from 'react';
import '../index.css';

const Tasks = ({ tasks, deleteTask, toggleTask }) => {

  return (
    <>
      <h2 className="showTask">Tasks:</h2>
      <ul className="showList">
        {tasks.map((task, idx) => (
          <li className="list" key={idx}>
            {task.title}
            <div>
              <button className='pending-icon' onClick={() => { toggleTask(task.id) }}>{task.completed ? '✅' : '❌'}</button>
              <button
                className="deleteButton hide" style={{display:"block", }}
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
