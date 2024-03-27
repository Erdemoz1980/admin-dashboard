import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/noavatar.png' alt='avatar' width={40} height={40} className={styles.userImage} />
                Erdem Oz
              </div>
             
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>27.03.2024</td>
            <td>$3,200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}><Image src='/noavatar.png' alt='avatar' width={40} height={40} className={styles.userImage} />
                Marino Canal</div>
              
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>01.02.2024</td>
            <td>$2,350</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}> <Image src='/noavatar.png' alt='avatar' width={40} height={40} className={styles.userImage} />
                Mind Against</div>
             
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>04.06.2024</td>
            <td>$7,550</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Transactions