"use client";
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Search = ({ placeholder }) => {
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchparams);
    if (e.target.value) {
       params.set('q', e.target.value);
    } else {
      params.delete('q');
    }
   
    replace(`${pathname}?${params}`)
  }

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
        />
    </div>
  )
}

export default Search