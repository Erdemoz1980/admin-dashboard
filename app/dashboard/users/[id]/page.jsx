"use client";
import { useParams } from "next/navigation";
import Image from 'next/image';
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css';

const SingleUserPage = () => {
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
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder="Erdem Oz" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="password" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" placeholder="phone" />
        <label htmlFor="address">Address</label>
        <textarea name="address" id="address" cols="30" rows="10">Address</textarea>
        <label htmlFor="isAdmin">Is Admin?</label>
        <select name="isAdmin" id="asAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label htmlFor="isActive">Is Active?</label>
        <select name="isActive" id="asActvie">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
          </form>
      </section>
    </div>
  )
}

export default SingleUserPage