import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";
//Events are stored in App.js
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "PTM",
      day: 'Feb 12 at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: "Assignment due",
      day: 'Feb 1 at 12:00am',
      reminder: false
    },
    {
      id: 3,
      text: "shopping",
      day: 'Feb 5 at 5pm',
      reminder: true
    }
  ])

  //Add Task on submit

  const addTask = (task) => {
    //  console.log(task)

    const id = Math.floor(Math.random() * 10000) + 1
    //console.log(id)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  //DELETE TASK

  const deleteTask = (id) => {
    // console.log('Delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder

  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //pass prop to task
  //onDelete is a prop of Task
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* Add Task */}
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks')}
    </div>
  );
}


/* class App extends React.Component{
  render(){
    return <h1>Hello from a class</h1>
  }
}
 */

export default App;