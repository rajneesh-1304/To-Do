import React from 'react';
import '../index.css';

const RestoredTask = ({ deletedTasks, restoreTask }) => {
  return (
    <>
      <h2 className="showTask">Restored Tasks:</h2>
      <ul className="showList">
        {deletedTasks.map((task) => (
          <li className="list" key={task.id}>
            {task.title}
            <button
              className="restoreButton" onClick={() => restoreTask(task.id)}
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
