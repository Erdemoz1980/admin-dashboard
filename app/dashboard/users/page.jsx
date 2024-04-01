import Link  from 'next/link';
import Image from 'next/image';
import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/users/users.module.css';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchUsers } from '@/app/lib/data';

const UsersPage = async ({searchParams}) => {

  const query = searchParams.q;

  const users = await fetchUsers(query);


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
          {users.map(user => (
            <tr key={user._id}>
            <td>
              <div className={styles.user}>
                  <Image src={user.img} alt='noavatar' width={40} height={40} className={styles.userImage} />
                  {user.username}
              </div>
            </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive  ? 'Active' : 'Expired'}</td>
            <td className={styles.buttons}>
                <Link href={`/dashboard/users/${user._id}`}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href='/'>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
            </td>
          </tr> 
          ))}
        </tbody>
      </table>
      <Pagination />
      
    </div>
  )
}

export default UsersPage