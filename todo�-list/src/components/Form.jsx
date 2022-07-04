import styles from '../styles/Form.module.css'
const Form = ({setNewTask,setTasks,newTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => [...prev,{task:newTask,id:Date.now(32)}])
        setNewTask('')
    }
  return (
    <form className={''} onSubmit={handleSubmit}>
        <textarea placeholder='notes...' value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}></textarea>
        <button type="submit"  name="" id=""><i class="fa-solid fa-plus"></i></button>
    </form>
  )
}

export default Form