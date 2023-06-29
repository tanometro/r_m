import styles from "./Searchbar.module.css"

export default function SearchBar(props) {
   const {onSearch} = props;
  
   return (
      <div className={styles.headerDiv} >
         <input className={styles.buscadorInput} type='search' />
         <button className={styles.buscadorBoton} onClick={onSearch} type="button">Agregar</button>
      </div>
   );
}
