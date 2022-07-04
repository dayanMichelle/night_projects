import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleDelete = (id) => {
    const newTaks = tasks.filter( taks => taks.id != id)
    setTasks(newTaks)
  }

  return (
    <div>
      
      <Card  handleDelete={handleDelete} setTasks={setTasks} tasks={tasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  )
}

export default App
