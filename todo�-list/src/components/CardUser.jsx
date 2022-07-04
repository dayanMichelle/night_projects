import styles from '../styles/CardUser.module.css'
const CardUser = () => {
  return (
    <div className={styles.container_card}>
      <div className={styles.info}>
        <h1>Daily UI Todo List</h1>
        <p>Pratcice Designe Everyday</p>
      </div>
      <div className={styles.avatar}>
        <i class="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default CardUser;
