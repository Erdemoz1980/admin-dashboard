"use client";
import { useParams } from "next/navigation";
import Image from 'next/image';
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css';

const SingleProductPage = () => {
  const {id} = useParams();

  return (
    <div className={styles.container}>
      <section className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='avatar' fill  />
        </div>
        Erdem Oz
      </section>
      <section className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Product Title" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" placeholder="price" />
        <label htmlFor="stock">Stock</label>
        <input type="password" name="password" id="password" placeholder="password" />
        <label htmlFor="color">Color</label>
        <input type="text" name="color" id="color" placeholder="color" />
        <label htmlFor="size">Size</label>
        <input type="text" name="size" id="size"placeholder="Size" />
        <label htmlFor="cat">Category</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="electronics">Electronics</option>
        </select>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" rows="16" placeholder="description"></textarea>
        
          <button type="submit">Update</button>
          </form>
      </section>
    </div>
  )
}

export default SingleProductPage