
const Form = ({setNewTask,setTasks,newTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => [...prev,newTask])
        setNewTask('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <textarea value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}></textarea>
        <input type="submit"  name="" id="" />
    </form>
  )
}

export default Form