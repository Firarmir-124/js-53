import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/addTaskForm";
import Task from "./Task/task";

function App() {

  const [task, setTask] = useState([
    {name: 'Выпить чай', id: 't1', completed: false},
    {name: 'Поесть', id: 't2', completed: false},
    {name: 'Погулять', id: 't3', completed: false},
  ])
  const [currentTask, setCurrentTask] = useState('');
  const [count, setCount] = useState(4);

  const addTask = () => {
    const copyAry = [...task];
    const addTask = {
      name: currentTask,
      id: `t${count}`,
      completed: false,
    };
    copyAry.push(addTask);
    setTask(copyAry)
    setCount(count + 1);
    setCurrentTask('');
  }


  const removeTask = (id: string) => {
    const copyAry = [...task];
    const index = task.findIndex(p => p.id === id);
    copyAry.splice(index, 1);
    setTask(copyAry);
  }

  const toCompleted = (id:string) => {
    const copy = [...task];
    const index = copy.findIndex(t => t.id === id);
    const completed = {...task[index]};
    completed.completed = !completed.completed;
    copy[index] = completed;
    setTask(copy)
  }

  const addClass = (id: string) => {
    let defaultName:string = 'task ';
    const index = task.findIndex(t => t.id === id);
    const completed = {...task[index]}.completed;

    if (completed) {
      defaultName += 'active'
    }

    return defaultName;
  }


  return (
    <div className="App">
      <AddTaskForm name={currentTask} onNameChange={event => setCurrentTask(event.target.value)} add={addTask} />
      {task.map((name, index) => (
        <Task addClass={addClass(name.id)} name={name.name} key={name.id} remove={() => removeTask(name.id)} completed={() => toCompleted(name.id)}/>
      ))}
    </div>
  );
}

export default App;
