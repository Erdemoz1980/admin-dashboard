import Link  from 'next/link';
import Image from 'next/image';
import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/users/users.module.css';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search users...' />
        <Link href='/dashboard/users/test'>
          <button className={styles.addButton}>Add New</button>
        </Link>
        
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/noavatar.png' alt='noavatar' width={40} height={40} className={styles.userImage} />
              </div>
            </td>
            <td>erdemoz@gmail.com</td>
            <td>27.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td className={styles.buttons}>
              <Link href='/'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href='/'>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
      
    </div>
  )
}

export default UsersPage