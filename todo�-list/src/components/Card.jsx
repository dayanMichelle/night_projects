
import Form from "./Form"
import List from "./List"
import styles from '../styles/Card.module.css'
import CardUser from "./CardUser"

const Card = ({tasks,newTask,setTasks,setNewTask,handleDelete}) => {
    
  return (
    <div className={styles.container}>
        <CardUser />
        <List handleDelete={handleDelete} setTasks={setTasks} tasks={tasks} />
        <Form  setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  )
}

export default Card