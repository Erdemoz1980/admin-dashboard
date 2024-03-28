import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css';

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category </option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" id="price" />
        <input type="number" name="stock" id="stock" />
        <input type="text" name="color" id="color" />
        <input type="text" name="size" id="size" />
        <textarea name="desc" id="desc" rows="16" placeholder='description'></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProduct