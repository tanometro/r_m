import styles from "./Searchbar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
const {buscar} = props;
const [id, setId] = useState("");

const handleChange = (e) => {
   setId(e.target.value);
}

   return (
      <div>
         <input
         onChange={handleChange}
         className={styles.buscadorInput} 
         value={id}
         type='search' placeholder="BRO! Type here your ID" />
         <button 
         className={styles.buscadorBoton} 
         onClick={() => buscar(id<826?id:826)} 
         type="button">Agregar</button>
      </div>
   );
}
