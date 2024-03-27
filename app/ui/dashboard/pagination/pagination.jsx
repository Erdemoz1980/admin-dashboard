import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>Next</button>
      <button className={styles.button}>Previous</button>
    </div>
  )
}

export default Pagination