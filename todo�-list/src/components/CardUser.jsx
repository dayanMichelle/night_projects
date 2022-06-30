import styles from '../styles/CardUser.module.css'
const CardUser = () => {
  return (
    <div className={styles.container_card}>
      <div className={styles.info}>
        <h1>Daily UI Todo List</h1>
        <p>Pratcice Designe Everyday</p>
      </div>
      <div className={styles.avatar}>
        <img width='100px' src="https://marketplace.canva.com/EAEj17Y_k_k/1/0/1600w/canva-amarillo-y-negro-gamer-desgastado-imagen-de-perfil-de-twitch-ECHU3zpt238.jpg" alt="" />
      </div>
    </div>
  );
};

export default CardUser;
