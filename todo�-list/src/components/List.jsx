import styles from "../styles/List.module.css";
const List = ({ tasks }) => {
  return (
    <div >
      {tasks.map((task) => (
        <div className={styles.task}>
          <input type="checkbox" /> <p>{task}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
