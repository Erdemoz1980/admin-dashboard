import Link from 'next/link';
import Image from 'next/image';
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import styles from '../../ui/dashboard/products/products.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder='Search products...' />
      <Link href='/dashboard/products/test'>
        <button className={styles.addButton}>Add New</button>
      </Link>
      
    </div>

    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.product}>
                <Image src='/noproduct.jpg' alt='noproduct' width={40} height={40} className={styles.productImage} />
                Iphone
            </div>
          </td>
          <td>description...</td>
          <td>$999</td>
          <td>27.03.2024</td>
          <td>14</td>
          <td className={styles.buttons}>
            <Link href='/dashboard/products/test'>
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

export default ProductsPage