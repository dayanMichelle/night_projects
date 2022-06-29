import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  console.log(newTask)

  return (
    <div>
      
      <Card setTasks={setTasks} tasks={tasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  )
}

export default App
