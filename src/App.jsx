import { useState, useEffect } from 'react';
import './index.css'
import RestoredTask from './components/RestoredTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));

  return Array.isArray(savedTasks) ? savedTasks : [];
});

  const [deletedTasks, setDeletedTasks] = useState(() => {
    const savedDeleted = JSON.parse(localStorage.getItem('deletedTasks'));
    return Array.isArray(savedDeleted) ? savedDeleted : [];
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
    if(newTask.trim() === ''){
      return;
    }

    const newTaskObject={
      id: Date.now(),
      title: newTask,
      completed: false,
    }
    
    setTasks([newTaskObject, ...tasks]);
    setNewTask('');
  }

  const deleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    if (!taskToDelete) return;

    setTasks(tasks.filter(task => task.id !== id));
    setDeletedTasks([...deletedTasks, taskToDelete]);
  };

  const restoreTask = (id) => {
    const taskToRestore = deletedTasks.find(task => task.id === id);
    if (!taskToRestore) return;

    setDeletedTasks(deletedTasks.filter(task => task.id !== id));
    setTasks([...tasks, { ...taskToRestore, completed: false }]);
  };

const toggleTask= (id) => {
  console.log({id})
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed} : task
      )
    );
  }

  return (
    <>
      <div className="main">
        <div className="header">Todo List Using JavaScript</div>
        <div className='task'>

          <div className='addTask'>
            <input type="text" className='inputTask' placeholder="Enter task..." value={newTask} onChange={handleInputChange} />
            <button className='addButton'
              onClick={addTask}
            >Add</button>
          </div>

          <div className='display'>
            <Tasks tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
            <RestoredTask deletedTasks={deletedTasks} restoreTask={restoreTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
