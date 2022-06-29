
import Form from "./Form"
import List from "./List"

const Card = ({tasks,newTask,setTasks,setNewTask}) => {
    
  return (
    <div>
        <List tasks={tasks} />
        <Form  setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  )
}

export default Card