import { useState } from "react";
import styles from "../styles/List.module.css";
import Checkbox from "./Checkbox";
const List = ({ tasks,setTasks,handleDelete }) => {

  return (
    <div className={styles.cotainer_list}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.task}>
          <Checkbox handleDelete={handleDelete} task={task} />
        </div>
      ))}
    </div>
  );
};

export default List;
