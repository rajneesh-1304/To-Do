import { useState } from 'react';
import './index.css'

function App() {
  const [] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [deletedTasks, setDeletedTasks]=useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');


  }

  const deleteTask = (deleteTask) =>{
    tasks.filter(task=> task == deleteTask)
  }



  return (
    <>
      <div class="main">
        <div class="header">Todo List Using JavaScript</div>
        <div class='task'>

          <div class='addTask'>
            <input type="text" class='inputTask' value={newTask} onChange={handleInputChange}/>
            <button class='addButton'
            onClick={addTask}
            >Add</button>
          </div>

          <div class='display'>
            <h2 class='showTask'>Tasks:</h2>
            <ul class='showList'>
              {tasks.map((t, idx)=>(
                <li class='list'>{t}
                <button class='deleteButton'>Delete</button>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
