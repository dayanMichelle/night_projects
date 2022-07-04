import { useState } from "react";

const Checkbox = ({ task, handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <input
      
        onChange={(e) => {
          setIsChecked(!isChecked);
          setTimeout(() => {
               handleDelete(task.id);
          }, 500);
       
        }}
        checked={isChecked}
        type="checkbox"
      />{" "}
      <p style={{textDecoration: `${isChecked ? 'line-through' : ''} `}}> {task.task}</p>
    </>
  );
};

export default Checkbox;
