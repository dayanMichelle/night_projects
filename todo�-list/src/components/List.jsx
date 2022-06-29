
const List = ({tasks}) => {
  return (
    <div>My list
        {tasks.map( task => (
            <h1>{task}</h1>
        ))}
    </div>
  )
}

export default List