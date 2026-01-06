import { useState, useEffect } from 'react';
import './index.css'
import RestoredTask from './components/RestoredTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });

  const [deletedTasks, setDeletedTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('deletedTasks')) || [];
  });

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
  }, [deletedTasks]);


  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    setDeletedTasks([...deletedTasks, taskToDelete]);

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const restoreTask = (index) => {
    const taskToRestore = deletedTasks[index];
    setTasks([...tasks, taskToRestore]);

    const updateDeletedTask = deletedTasks.filter((_, i) => i !== index);
    setDeletedTasks(updateDeletedTask);
  }


  return (
    <>
      <div className="main">
        <div className="header">Todo List Using JavaScript</div>
        <div className='task'>

          <div className='addTask'>
            <input type="text" className='inputTask' value={newTask} onChange={handleInputChange} />
            <button className='addButton'
              onClick={addTask}
            >Add</button>
          </div>

          <div className='display'>
            <Tasks tasks={tasks} deleteTask={deleteTask} />
            <RestoredTask deletedTasks={deletedTasks} restoreTask={restoreTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
