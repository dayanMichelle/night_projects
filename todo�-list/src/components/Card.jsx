
import Form from "./Form"
import List from "./List"
import styles from '../styles/Card.module.css'
import CardUser from "./CardUser"

const Card = ({tasks,newTask,setTasks,setNewTask}) => {
    
  return (
    <div className={styles.container}>
        <CardUser />
        <List tasks={tasks} />
        <Form  setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
    </div>
  )
}

export default Card