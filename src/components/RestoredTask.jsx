import React from 'react';
import '../index.css';

const RestoredTask = ({ deletedTasks, restoreTask }) => {
  return (
    <>
      <h2 className="showTask">Restored Tasks:</h2>
      <ul className="showList">
        {deletedTasks.map((task, idx) => (
          <li className="list" key={idx}>
            {task.title}
            <button
              className="restoreButton"
              onClick={() => restoreTask(idx)}
            >
              Restore
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestoredTask;
